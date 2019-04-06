import Vue from 'vue'
import Vuex from 'vuex'
import user from './store-modules/user.js'
import utils from './store-modules/utils.js'
import portfolio from './store-modules/portifolio'
import writing from './store-modules/writing'
Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      utils,
      portfolio,
      writing
    }
  })

  return Store
}
