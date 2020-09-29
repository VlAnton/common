<template>
  <div class="container">
    <div class="first">
      <div class="switcher">
        <img
          src="../static/new-buttons/switcher.svg"
          class="switcher_icon"
          @click="isHidden = !isHidden"
          :class="isHidden && 'switcher_icon__rotated'"/>
      </div>
      <router-link to="/" class="logo">
        <img src="../static/logo.svg" class="logo_img" />
      </router-link>
    </div>
    <div class="middle">
      <h2 class="title">
        <template v-if="searchStr">Результаты поиска</template>
      </h2>
      <div class="global_search_container">
        <img class="search-logo" src="../static/search.svg" />
        <input
          class="global_search"
          placeholder="Поиск по сайту..."
          v-model="searchStr"
        />
        <img
          v-if="searchStr"
          class="close"
          src="../static/buttons/close.svg"
          @click="clear" />
      </div>
    </div>
    <div class="last">
      <router-link to="/glossary" title="Глоссарий">
        <img src="../static/buttons/glossary.svg" class="button_header" />
      </router-link>
    </div>
    <template v-if="searchStr">
      <GlobalSearch />
    </template>
  </div>
</template>

<script>
import GlobalSearch from "./GlobalSearch/GlobalSearch.vue";

export default {
  data() {
    return {
      route: ""
    }
  },
  components: {
    GlobalSearch
  },
  destroyed() {
    this.clear();
  },
  methods: {
    clear() {
      this.searchStr = "";
    },
  },
  computed: {
    currentPath() {
      return this.$router.currentRoute;
    },
    isHidden: {
      get() {
        return this.$store.getters["isHidden"];
      },
      set(value) {
        this.$store.dispatch("onSwitch", value);
      }
    },
    searchStr: {
      get() {
        return this.$store.getters["searchStr"];
      },
      set(value) {
        this.$store.dispatch("onChangeSearchStr", value);
      }
    },
  }
};
</script>

<style scoped>
.container {
  height: 90px;
  padding: 0 16px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  z-index: 90001;
  background: #fff;
  position: absolute;
  width: 100%
}

.first {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 90px;
}

.middle {
  display: flex;
}

.header_container {
  background: #fff;
  z-index: 90001;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vh;
  padding: 2rem 3rem;
  max-height: 90px;
}

@media screen and (max-width: 900px) {
  .header_container {
    max-width: calc(100vw - 80px);
    width: calc(100vw - (11 * (1vw + 1vh - 1vmin)));
  }
}

.switcher {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  margin: 0 16px 0 0;
  width: 65px;
  height: 37px;
  padding: 8px;
  margin-right: 8px;
  text-align: center;
}

.switcher_icon {
  vertical-align: middle;
  margin: 0;
  padding: 0;
  line-height: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  height: 21px;
  width: 21px;
}

.switcher_icon__rotated {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.button_header {
  width: 32px;
  transition: 0.3s;
}

.button_header:hover {
  border-radius: 6px;
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12), 0 2px 1px rgba(0, 0, 0, 0.24);
}

.title {
  font-size: 22px;
}

.global_search_container {
  background: #fff;
  display: flex;
  position: relative;
  justify-content: space-between;

  border: 1px solid gainsboro;
  border-radius: 7px;
  width: 25vw;
  height: 32px;
  font-size: 16px;
  padding: 0 10px;
  margin-right: 50px;
  margin-left: 50px;

  transition: 0.3s;
}

.global_search_container:focus-within {
  box-shadow: 0 0 10px gainsboro;
}

.search-logo {
  margin-right: 10px;
  width: 17px;
  height: 17px;
  margin-top: 6px;
}

.global_search {
  border: none;
  outline: none;
  width: 100%;
}

.close {
  cursor: pointer;
  width: 17px;
  right: 1rem;
  margin-top: 6px;
  height: 17px;
  opacity: 0.3;
  transition: 0.3s;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1.5rem;
  margin-bottom: 50px;
  margin: calc(3 * (1vw + 1vh - 1vmin)) 0;
}

.logo_img {
  width: 177px;
  height: 37px;
}

</style>
