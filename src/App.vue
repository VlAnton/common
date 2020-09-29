<template>
  <div id="app">
    <SideMenu />
    <PageHeader />
    <transition name="fadeOut">
      <Loader v-if="loading" />
    </transition>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import PageHeader from "./components/PageHeader.vue";
import Loader from "./components/Loader.vue";

export default {
  name: 'App',
  components: {
    SideMenu,
    PageHeader,
    Loader
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
}
</script>

<style>
html {
  background: #f6f4fc;
  box-sizing: border-box;
  font-family: "PT Root UI";
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  font-size: 13px;
  word-spacing: 1px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
