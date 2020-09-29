<template>
  <transition>
    <router-link
      v-if="activity.link.startsWith('/')"
      class="activity_block"
      :to="activity.link"
      :target="activity.openInTab && '_blank'"
      :title="activity.description"
    >
      <img :src="activity.icon ? backendUrl + activity.icon.url : ''" class="activity_logo" />

      <div class="activity_content">
        <h3 class="activity_title">{{activity.title}}</h3>
        <div class="activity_description">{{activity.description | lineClamp(1)}}</div>
      </div>
    </router-link>
    <a
      v-else
      class="activity_block"
      :href="activity.link"
      :target="activity.openInTab && '_blank'"
      :title="activity.description"
    >
      <img :src="activity.icon ? backendUrl + activity.icon.url : ''" class="activity_logo" />

      <div class="activity_content">
        <h3 class="activity_title">{{activity.title}}</h3>
        <div class="activity_description">{{activity.description | lineClamp(1)}}</div>
      </div>
    </a>
  </transition>
</template>

<script>
import backendUrl from "../api";

export default {
  props: {
    activity: Object,
    searchRes: String
  },
  destroyed() {
    this.backendUrl = null;
  },
  data: () => ({
    backendUrl
  }),
  filters: {
    lineClamp: (str, numberOfLines) => {
      const numberOfSymbols = numberOfLines * 23;
      let newStr = str.slice(0, numberOfSymbols).trim();
      if (str.length > numberOfSymbols) {
        newStr += "...";
      }
      return newStr;
    }
  }
};
</script>

<style scoped>
.activity_block {
  display: flex;
  cursor: pointer;
  align-items: center;
  user-select: none;
  background: #fff;

  border: 1px solid gainsboro;

  margin: 10px;
  min-height: 90px;
  max-height: 110px;
  min-width: 271px;
  transition: 0.3s;
  border-radius: 7px;
  padding: 10px 20px;
  width: calc(12.7 * (1vw + 1vh - 1vmin));
}

.activity_block:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.05);
}

.activity_title {
  display: -webkit-box;

  width: 100%;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}

.activity_content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.activity_logo {
  background-position: center;
  background-repeat: no-repeat;

  min-width: 40px;
  margin-right: 15px;
  background-size: 100%;
  width: calc(3 * (1vw + 1vh - 1vmin));
}

.activity_description {
  color: #33383b;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;

  font-size: 13px;
  font-weight: 500;
}

@media screen and (max-width: 900px) {
  .activity_block {
    width: 30.1%;
  }
}

@media screen and (max-width: 700px) {
  .activity_block {
    width: 45.5%;
  }
}

@media screen and (max-width: 500px) {
  .activity_block {
    width: 100%;
  }
}
</style>
