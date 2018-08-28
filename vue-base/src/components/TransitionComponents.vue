<template>
  <div>
    <button @click="show1 = !show1">fade</button>
    <transition name="fade">
      <p v-if="show1">fade</p>
    </transition>
    <br>
    <button @click="show2 = !show2">slide-fade</button>
    <transition name="slide-fade">
      <p v-if="show2">slide-fade</p>
    </transition>
    <br>
    <button @click="show3 = !show3">show3</button>
    <transition name="fade" mode="out-in">
      <button v-if="show3" key="save">
        Save
      </button>
      <button v-else key="edit">
        Edit
      </button>
    </transition>
    <br>
    <div id="animated-number-demo">
      <p>{{ animatedNumber }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TransitionComponents",
    data() {
      return {
        show1: false,
        show2: false,
        show3: false,
        tweenedNumber: 0
      }
    },
    computed: {
      animatedNumber: function () {
        return this.tweenedNumber.toFixed(0);
      }
    },
    created() {
      this.changeToNumber();
    },
    methods: {
      changeToNumber() {
        TweenLite.to(this.$data, 0.5, {tweenedNumber: 100})
      }
    }
  }
</script>

<style scoped>
  /*fade*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  /*slide-fade*/
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 2s;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }

  .slide-fade-enter-to, .slide-fade-leave {
    transform: translateX(0px);
    opacity: 1;
  }

</style>
