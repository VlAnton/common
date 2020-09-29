import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VueAxios from 'vue-axios';

import global from "./modules/global";
import globalSearch from "./modules/globalSearch";
import sidemenu from "./modules/sidemenu";


Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    global,
    globalSearch,
    sidemenu
  }
});
