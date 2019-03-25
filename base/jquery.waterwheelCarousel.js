/*!
* Waterwheel Carousel
* Version 2.3.0
* http://www.bkosborne.com
*
* Copyright 2011-2013 Brian Osborne
* Dual licensed under GPLv3 or MIT
* Copies of the licenses have been distributed
* with this plugin.
*
* Plugin written by Brian Osborne
* for use with the jQuery JavaScript Framework
* http://www.jquery.com
*/
;
(function ($) {
	'use strict';
	$.fn.waterwheelCarousel = function (startingOptions) {
		console.log(this)
		if (this.length > 1) {
			this.each(function () {
				$(this).waterwheelCarousel(startingOptions);
			});
			return this;
		}
		var carousel = this;
		var options = {};
		var data = {};

		function initializeCarouselData() {
			data = {
				itemsContainer: $(carousel),
				totalItems: $(carousel).find('img').length,
				containerWidth: $(carousel).width(),
				containerHeight: $(carousel).height(),
				currentCenterItem: null,
				previousCenterItem: null,
				items: [],
				calculations: [],
				carouselRotationsLeft: 0,
				currentlyMoving: false,
				itemsAnimating: 0,
				currentSpeed: options.speed,
				intervalTimer: null,
				currentDirection: 'forward',
				leftItemsCount: 0,
				rightItemsCount: 0,
				performingSetup: true
			};
			data.itemsContainer.find('img').removeClass(options.activeClassName);
		}

		function autoPlay(stop) {
			clearTimeout(data.autoPlayTimer);
			if (!stop && options.autoPlay !== 0) {
				data.autoPlayTimer = setTimeout(function () {
					if (options.autoPlay > 0) {
						moveOnce('forward');
					} else {
						moveOnce('backward');
					}
				}, Math.abs(options.autoPlay));
			}
		}

		function preload(callback) {
			if (options.preloadImages === false) {
				callback();
				return;
			}
			var $imageElements = data.itemsContainer.find('img'),
				loadedImages = 0,
				totalImages = $imageElements.length;
			$imageElements.each(function () {
				$(this).bind('load', function () {
					loadedImages += 1;
					if (loadedImages === totalImages) {
						callback();
						return;
					}
				});
				$(this).attr('src', $(this).attr('src'));
				if (this.complete) {
					$(this).trigger('load');
				}
			});
		}

		function setOriginalItemDimensions() {
			data.itemsContainer.find('img').each(function () {
				if ($(this).data('original_width') == undefined || options.forcedImageWidth != undefined) {
					$(this).data('original_width', $(this).width());
				}
				if ($(this).data('original_height') == undefined || options.forcedImageHeight != undefined) {
					$(this).data('original_height', $(this).height());
				}
			});
		}

		function forceImageDimensionsIfEnabled() {
			if (options.forcedImageWidth && options.forcedImageHeight) {
				data.itemsContainer.find('img').each(function () {
					$(this).width(options.forcedImageWidth);
					$(this).height(options.forcedImageHeight);
				});
			}
		}

		function preCalculatePositionProperties() {
			var $firstItem = data.itemsContainer.find('img:first');
			data.calculations[0] = {
				distance: 0,
				offset: 0,
				opacity: 1
			}
			var horizonOffset = options.horizonOffset;
			var separation = options.separation;
			for (var i = 1; i <= options.flankingItems + 2; i++) {
				if (i > 1) {
					horizonOffset *= options.horizonOffsetMultiplier;
					separation *= options.separationMultiplier;
				}
				data.calculations[i] = {
					distance: data.calculations[i - 1].distance + separation,
					offset: data.calculations[i - 1].offset + horizonOffset,
					opacity: data.calculations[i - 1].opacity * options.opacityMultiplier
				}
			}
			if (options.edgeFadeEnabled) {
				data.calculations[options.flankingItems + 1].opacity = 0;
			} else {
				data.calculations[options.flankingItems + 1] = {
					distance: 0,
					offset: 0,
					opacity: 0
				}
			}
		}

		function setupCarousel() {
			data.items = data.itemsContainer.find('img');
			for (var i = 0; i < data.totalItems; i++) {
				data.items[i] = $(data.items[i]);
			}
			if (options.horizon === 0) {
				if (options.orientation === 'horizontal') {
					options.horizon = data.containerHeight / 2;
				} else {
					options.horizon = data.containerWidth / 2;
				}
			}
			data.itemsContainer.css('position', 'relative').find('img').each(function () {
				var centerPosLeft,
					centerPosTop;
				if (options.orientation === 'horizontal') {
					centerPosLeft = (data.containerWidth / 2) - ($(this).data('original_width') / 2);
					centerPosTop = options.horizon - ($(this).data('original_height') / 2);
				} else {
					centerPosLeft = options.horizon - ($(this).data('original_width') / 2);
					centerPosTop = (data.containerHeight / 2) - ($(this).data('original_height') / 2);
				}
				$(this).css({
					'left': centerPosLeft,
					'top': centerPosTop,
					'visibility': 'visible',
					'position': 'absolute',
					'z-index': 0,
					'opacity': 0
				}).data({
					top: centerPosTop,
					left: centerPosLeft,
					oldPosition: 0,
					currentPosition: 0,
					depth: 0,
					opacity: 0
				}).show();
			});
		}

		function setupStarterRotation() {
			options.startingItem = (options.startingItem === 0) ? Math.round(data.totalItems / 2) : options.startingItem;
			data.rightItemsCount = Math.ceil((data.totalItems - 1) / 2);
			data.leftItemsCount = Math.floor((data.totalItems - 1) / 2);
			data.carouselRotationsLeft = 1;
			moveItem(data.items[options.startingItem - 1], 0);
			data.items[options.startingItem - 1].css('opacity', 1);
			var itemIndex = options.startingItem - 1;
			for (var pos = 1; pos <= data.rightItemsCount; pos++) {
				(itemIndex < data.totalItems - 1) ? itemIndex += 1 : itemIndex = 0;
				data.items[itemIndex].css('opacity', 1);
				moveItem(data.items[itemIndex], pos);
			}
			var itemIndex = options.startingItem - 1;
			for (var pos = -1; pos >= data.leftItemsCount * -1; pos--) {
				(itemIndex > 0) ? itemIndex -= 1 : itemIndex = data.totalItems - 1;
				data.items[itemIndex].css('opacity', 1);
				moveItem(data.items[itemIndex], pos);
			}
		}

		function performCalculations($item, newPosition) {
			var newDistanceFromCenter = Math.abs(newPosition);
			if (newDistanceFromCenter < options.flankingItems + 1) {
				var calculations = data.calculations[newDistanceFromCenter];
			} else {
				var calculations = data.calculations[options.flankingItems + 1];
			}
			var distanceFactor = Math.pow(options.sizeMultiplier, newDistanceFromCenter)
			var newWidth = distanceFactor * $item.data('original_width');
			var newHeight = distanceFactor * $item.data('original_height');
			var widthDifference = Math.abs($item.width() - newWidth);
			var heightDifference = Math.abs($item.height() - newHeight);
			var newOffset = calculations.offset
			var newDistance = calculations.distance;
			if (newPosition < 0) {
				newDistance *= -1;
			}
			if (options.orientation == 'horizontal') {
				var center = data.containerWidth / 2;
				var newLeft = center + newDistance - (newWidth / 2);
				var newTop = options.horizon - newOffset - (newHeight / 2);
			} else {
				var center = data.containerHeight / 2;
				var newLeft = options.horizon - newOffset - (newWidth / 2);
				var newTop = center + newDistance - (newHeight / 2);
			}
			var newOpacity;
			if (newPosition === 0) {
				newOpacity = 1;
			} else {
				newOpacity = calculations.opacity;
			}
			var newDepth = options.flankingItems + 2 - newDistanceFromCenter;
			$item.data('width', newWidth);
			$item.data('height', newHeight);
			$item.data('top', newTop);
			$item.data('left', newLeft);
			$item.data('oldPosition', $item.data('currentPosition'));
			$item.data('depth', newDepth);
			$item.data('opacity', newOpacity);
		}

		function moveItem($item, newPosition) {
			if (Math.abs(newPosition) <= options.flankingItems + 1) {
				performCalculations($item, newPosition);
				data.itemsAnimating++;
				$item.css('z-index', $item.data().depth).animate({
					left: $item.data().left,
					width: $item.data().width,
					height: $item.data().height,
					top: $item.data().top,
					opacity: $item.data().opacity
				}, data.currentSpeed, options.animationEasing, function () {
					itemAnimationComplete($item, newPosition);
				});
			} else {
				$item.data('currentPosition', newPosition)
				if ($item.data('oldPosition') === 0) {
					$item.css({
						'left': $item.data().left,
						'width': $item.data().width,
						'height': $item.data().height,
						'top': $item.data().top,
						'opacity': $item.data().opacity,
						'z-index': $item.data().depth
					});
				}
			}
		}

		function itemAnimationComplete($item, newPosition) {
			data.itemsAnimating--;
			$item.data('currentPosition', newPosition);
			if (newPosition === 0) {
				data.currentCenterItem = $item;
			}
			if (data.itemsAnimating === 0) {
				data.carouselRotationsLeft -= 1;
				data.currentlyMoving = false;
				if (data.carouselRotationsLeft > 0) {
					rotateCarousel(0);
				} else {
					data.currentSpeed = options.speed;
					data.currentCenterItem.addClass(options.activeClassName);
					if (data.performingSetup === false) {
						options.movedToCenter(data.currentCenterItem);
						options.movedFromCenter(data.previousCenterItem);
					}
					data.performingSetup = false;
					autoPlay();
				}
			}
		}

		function rotateCarousel(rotations) {
			if (data.currentlyMoving === false) {
				data.currentCenterItem.removeClass(options.activeClassName);
				data.currentlyMoving = true;
				data.itemsAnimating = 0;
				data.carouselRotationsLeft += rotations;
				if (options.quickerForFurther === true) {
					if (rotations > 1) {
						data.currentSpeed = options.speed / rotations;
					}
					data.currentSpeed = (data.currentSpeed < 100) ? 100 : data.currentSpeed;
				}
				for (var i = 0; i < data.totalItems; i++) {
					var $item = $(data.items[i]);
					var currentPosition = $item.data('currentPosition');
					var newPosition;
					if (data.currentDirection == 'forward') {
						newPosition = currentPosition - 1;
					} else {
						newPosition = currentPosition + 1;
					}
					var flankingAllowance = (newPosition > 0) ? data.rightItemsCount : data.leftItemsCount;
					if (Math.abs(newPosition) > flankingAllowance) {
						newPosition = currentPosition * -1;
						if (data.totalItems % 2 == 0) {
							newPosition += 1;
						}
					}
					moveItem($item, newPosition);
				}
			}
		}

		$(this).find('img').bind("click", function () {
			var itemPosition = $(this).data().currentPosition;
			if (options.imageNav == false) {
				return;
			}
			if (Math.abs(itemPosition) >= options.flankingItems + 1) {
				return;
			}
			if (data.currentlyMoving) {
				return;
			}
			data.previousCenterItem = data.currentCenterItem;
			autoPlay(true);
			options.autoPlay = 0;
			var rotations = Math.abs(itemPosition);
			if (itemPosition == 0) {
				options.clickedCenter($(this));
			} else {
				options.movingFromCenter(data.currentCenterItem);
				options.movingToCenter($(this));
				if (itemPosition < 0) {
					data.currentDirection = 'backward';
					rotateCarousel(rotations);
				} else if (itemPosition > 0) {
					data.currentDirection = 'forward';
					rotateCarousel(rotations);
				}
			}
		});
		$(this).find('a').bind("click", function (event) {
			var isCenter = $(this).find('img').data('currentPosition') == 0;
			if (options.linkHandling === 1 || (options.linkHandling === 2 && !isCenter)) {
				event.preventDefault();
				return false;
			}
		});

		function nextItemFromCenter() {
			var $next = data.currentCenterItem.next();
			if ($next.length <= 0) {
				$next = data.currentCenterItem.parent().children().first();
			}
			return $next;
		}

		function prevItemFromCenter() {
			var $prev = data.currentCenterItem.prev();
			if ($prev.length <= 0) {
				$prev = data.currentCenterItem.parent().children().last();
			}
			return $prev;
		}

		function moveOnce(direction) {
			if (data.currentlyMoving === false) {
				data.previousCenterItem = data.currentCenterItem;
				options.movingFromCenter(data.currentCenterItem);
				if (direction == 'backward') {
					options.movingToCenter(prevItemFromCenter());
					data.currentDirection = 'backward';
				} else if (direction == 'forward') {
					options.movingToCenter(nextItemFromCenter());
					data.currentDirection = 'forward';
				}
			}
			rotateCarousel(1);
		}

		$(document).keydown(function (e) {
			if (options.keyboardNav) {
				if ((e.which === 37 && options.orientation == 'horizontal') || (e.which === 38 && options.orientation == 'vertical')) {
					autoPlay(true);
					options.autoPlay = 0;
					moveOnce('backward');
				} else if ((e.which === 39 && options.orientation == 'horizontal') || (e.which === 40 && options.orientation == 'vertical')) {
					autoPlay(true);
					options.autoPlay = 0;
					moveOnce('forward');
				}
				if (options.keyboardNavOverride && ((options.orientation == 'horizontal' && (e.which === 37 || e.which === 39)) || (options.orientation == 'vertical' && (e.which === 38 || e.which === 40)))) {
					e.preventDefault();
					return false;
				}
			}
		});
		this.reload = function (newOptions) {
			if (typeof newOptions === "object") {
				var combineDefaultWith = newOptions;
			} else {
				var combineDefaultWith = {};
			}
			options = $.extend({}, $.fn.waterwheelCarousel.defaults, newOptions);
			initializeCarouselData();
			data.itemsContainer.find('img').hide();
			forceImageDimensionsIfEnabled();
			preload(function () {
				setOriginalItemDimensions();
				preCalculatePositionProperties();
				setupCarousel();
				setupStarterRotation();
			});
		}
		this.next = function () {
			autoPlay(true);
			options.autoPlay = 0;
			moveOnce('forward');
		}
		this.prev = function () {
			autoPlay(true);
			options.autoPlay = 0;
			moveOnce('backward');
		}
		this.reload(startingOptions);
		return this;
	};
	$.fn.waterwheelCarousel.defaults = {
		startingItem: 1,
		separation: 150,
		separationMultiplier: 0.8,
		horizonOffset: 0,
		horizonOffsetMultiplier: 0.7,
		sizeMultiplier: 0.85,
		opacityMultiplier: 0.8,
		horizon: 0,
		flankingItems: 1,
		speed: 300,
		animationEasing: 'linear',
		quickerForFurther: true,
		edgeFadeEnabled: false,
		linkHandling: 2,
		autoPlay: 0,
		orientation: 'horizontal',
		activeClassName: 'carousel-center',
		keyboardNav: false,
		keyboardNavOverride: true,
		imageNav: true,
		preloadImages: true,
		forcedImageWidth: '14.75rem',
		forcedImageHeight: '15.3rem',
		movingToCenter: $.noop,
		movedToCenter: $.noop,
		clickedCenter: $.noop,
		movingFromCenter: $.noop,
		movedFromCenter: $.noop
	};
})(jQuery);


