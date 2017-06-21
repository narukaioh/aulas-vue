'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import *  as actions from './actions'

console.log(actions)

Vue.use(Vuex)

export default new Vuex.Store({ state, mutations, actions })