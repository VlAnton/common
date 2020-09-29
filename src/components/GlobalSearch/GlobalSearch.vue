<template>
  <div class="search_container">
    <div class="search_result" v-if="!loading">
      <div class="control_service">
        <b
          class="sub_title"
          v-for="service of Object.keys(services)"
          :key="service"
          :style="service === shownService ? 'color: rgb(75, 71, 113); border-bottom: 2px solid rgb(75, 71, 113)' : ''"
          @click="shownService = service">{{services[service]}}</b>
      </div>
      <template v-if="shownService === 'services'">
        <template v-if="!showServiceBlock('services')">
          <NotFound :searchStr="searchStr" />
        </template>
        <div v-else class="sub_block" style="margin-left: 10px">
          <ServiceCards :services="searchResult['services']" />
        </div>
      </template>
      <template v-if="shownService === 'activity'">
        <template v-if="!showServiceBlock('activity')">
          <NotFound :searchStr="searchStr" />
        </template>
        <div v-else class="sub_block" style="display: flex; flex-wrap: wrap;">
          <ActivityBlock
            v-for="activity in searchResult['activity']"
            :key="activity.id"
            :activity="activity" />
        </div>
      </template>
      <template v-if="shownService === 'question'">
        <template v-if="!showServiceBlock('question')">
          <NotFound :searchStr="searchStr" />
        </template>
        <div v-else class="sub_block">
          <QuestionBlock
            v-for="item in searchResult['question']"
            :isCollapses="item.isCollapses"
            :question="item.question"
            :answer="item.answer"
            :key="item.id"
            :id="item.id" />
        </div>
      </template>
    </div>
    <transition name="fadeOut">
      <Loader v-if="loading" />
    </transition>
  </div>
</template>

<script>
import ServiceCards from "../ServiceCards.vue";
import ActivityBlock from "../ActivityBlock.vue";
import QuestionBlock from "../QuestionBlock.vue";
import NotFound from "../GlobalSearch/NotFound.vue";
import Loader from "../Loader.vue";

export default {
  components: {
    ServiceCards,
    ActivityBlock,
    QuestionBlock,
    NotFound,
    Loader
  },
  data: () => ({
    pageTitle: "Результаты поиска",
    shownService: "activity",
    services: {
      services: "Главная",
      activity: "Инструменты",
      question: "Часто задаваемые вопросы"
    }
  }),
  beforeMount() {
    this.find();
    this.$store.dispatch("onLoading", false);
  },
  methods: {
    find() {
      if (this.loading || !this.searchStr)
        return;
      
      this.$store.dispatch("onLoading", true);
      var _this = this;
      setTimeout(() => {
          _this.$store.dispatch("onLoading", false);
          _this.$store.dispatch("fetch", _this.searchStr)
        },
        1500
      );
    },
    showServiceBlock(service) {
      return this.searchResult[service] && this.searchResult[service].length;
    },
  },
  computed: {
    searchStr: {
      get() {
        return this.$store.getters.searchStr;
      },
      set(value) {
        this.$store.dispatch("onChangeSearchStr", value);
      }
    },
    searchResult() {
      return this.$store.getters.searchResult;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    searchStr: function() {
      this.find();
    }
  }
}
</script>

<style scoped>
.search_container {
  z-index: 100;
  background: #f6f4fc;
  position: absolute;
  height: 100%;
  left: 18.2rem;
  padding-left: 2rem;
  right: 1.3rem;
  padding-right: 2rem;
  top: 10rem;
}

.search {
  position: relative;
  z-index: 90001;
}

.search_result {
  position: relative;
}

.sub_block {
  margin-top: 15px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 30px;
}

.title {
  font-size: 22px;
}

.control_service {
  display: flex;
  border-bottom: 1px solid gainsboro;
  margin-bottom: 50px;
}

.sub_title {
  color: gray;
  font-size: 17px;
  padding: 0 25px 0 25px;
  cursor: pointer;
  user-select: none;
}

.sub_title:hover {
  color: rgb(75, 71, 113);
  border-bottom: 1px solid rgb(75, 71, 113);
}
</style>
