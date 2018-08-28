import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Computed from '@/components/Computed'
import Watcher from '@/components/Watcher'
import Template from '@/components/Template'
import ForIn from '@/components/ForIn'
import ChangeArrayOrObject from '@/components/ChangeArrayOrObject'
import ScrollEvent from '@/components/ScrollEvent'
import ClickEvent from '@/components/ClickEvent'
import Form from '@/components/Form'
import ActiveComponent from '@/components/ActiveComponent'
import AttrsParent from '@/components/AttrsParent'
import VmodelInComponentWarp from '@/components/VmodelInComponentWarp'
import SyncInComponentWarp from '@/components/SyncInComponentWarp'
import SlotComponent from '@/components/SlotComponent'
import AsyncComponent from '@/components/AsyncComponent'
import TreeFolderWarp from '@/components/TreeFolderWarp'
import TransitionComponents from '@/components/TransitionComponents'
import Directives from '@/components/Directives'
import Bus from '@/components/Bus'
import RouterWithTarget_blank from '@/components/RouterWithTarget_blank'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/computed',
      name: 'Computed',
      component: Computed
    }, {
      path: '/watcher',
      name: 'Watcher',
      component: Watcher
    }, {
      path: '/template',
      name: 'Template',
      component: Template
    }, {
      path: '/forIn',
      name: 'ForIn',
      component: ForIn
    }, {
      path: '/changeArrayOrObject',
      name: 'ChangeArrayOrObject',
      component: ChangeArrayOrObject
    }, {
      path: '/scrollEvent',
      name: 'ScrollEvent',
      component: ScrollEvent
    }, {
      path: '/clickEvent',
      name: 'ClickEvent',
      component: ClickEvent
    }, {
      path: '/form',
      name: 'Form',
      component: Form
    }, {
      path: '/activeComponent',
      name: 'ActiveComponent',
      component: ActiveComponent
    }, {
      path: '/attrsParent',
      name: 'AttrsParent',
      component: AttrsParent
    }, {
      path: '/vmodelInComponentWarp',
      name: 'VmodelInComponentWarp',
      component: VmodelInComponentWarp
    }, {
      path: '/syncInComponentWarp',
      name: 'SyncInComponentWarp',
      component: SyncInComponentWarp
    }, {
      path: '/slotComponent',
      name: 'SlotComponent',
      component: SlotComponent
    }, {
      path: '/asyncComponent',
      name: 'AsyncComponent',
      component: AsyncComponent
    }, {
      path: '/treeFolderWarp',
      name: 'TreeFolderWarp',
      component: TreeFolderWarp
    }, {
      path: '/transitionComponents',
      name: 'TransitionComponents',
      component: TransitionComponents
    }, {
      path: '/directives',
      name: 'Directives',
      component: Directives
    },{
      path: '/bus',
      name: 'Bus',
      component: Bus
    },{
      path: '/routerWithTarget_blank',
      name: 'RouterWithTarget_blank',
      component: RouterWithTarget_blank
    }
  ]
})

