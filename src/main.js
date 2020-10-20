import Vue from 'vue'

import App from './App.vue';
import store from "./store";
import router from "./router/router";
import SideMenu from "./components/SideMenu.vue";
import PageHeader from "./components/PageHeader.vue";
import Loader from "./components/Loader.vue";
import ActivityBlock from "./components/ActivityBlock.vue";
import IENotification from "./components/IENotification.vue";
import NotificationsBlock from "./components/NotificationsBlock.vue";
import QuestionBlock from "./components/QuestionBlock.vue";
import ServiceCards from "./components/ServiceCards.vue";
import GlobalSearch from "./components/GlobalSearch/GlobalSearch.vue";
import NotFound from "./components/GlobalSearch/NotFound.vue";


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
