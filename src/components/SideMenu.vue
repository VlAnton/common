<template>
  <div class="container" :class="isHidden && 'container__switched'">
    <div class="button_container">
      <router-link
        :to="menu.link"
        v-for="(menu, index) in menus"
        :key="menu.id"
        class="button_wrapper"
        :style="currentUrl === menu.link && 'background: rgba(255, 234, 235);'"
        :class="isHidden && 'button_wrapper__switched'"
        :title="menu.title"
      >
        <img :src="require(`../static/new-buttons/${icons[index]}`)" class="button_icon" :style="isHidden && 'margin: 0 0 8px 0;'" />
        <span
          class="button_text"
          :style="currentUrl === menu.link && 'color: #000;'"
          :class="isHidden && 'button_text__switched'"
        >{{menu.title}}</span>
        <div class="button_line" v-if="currentUrl === menu.link" />
      </router-link>
      <router-link
        to="/feedback"
        class="button_wrapper"
        :style="currentUrl === '/feedback' && 'background: rgba(255, 234, 235);'"
        :class="isHidden && 'button_wrapper__switched'">
        <img :src="require(`../static/new-buttons/${feedbackIcons[0]}`)" class="button_icon" :style="isHidden && 'margin: 0 0 8px 0;'" />
        <span
          class="button_text"
          :style="currentUrl === '/feedback' && 'color: #000;'"
          :class="isHidden && 'button_text__switched'"
        >Оставить отзыв</span>
        <div class="button_line" v-if="currentUrl === '/feedback'" />
      </router-link>
      <a
        href="mailto:testlab@mts.ru?subject=[Report] Сообщение о некоректной работе портала testlab"
        title="Сообщение о некоректной работе портала"
        class="button_wrapper"
        :class="isHidden && 'button_wrapper__switched'"
      >
        <img :src="require(`../static/new-buttons/${feedbackIcons[1]}`)" class="button_icon" :style="isHidden && 'margin: 0 0 8px 0;'" />
        <span
          class="button_text"
          :class="isHidden && 'button_text__switched'"
        >Написать в поддержку</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.menus.length) {
      this.$store.dispatch("fetchMenu");
    }
  },
  data: () => ({
    feedbackIcons: [
      "feedback.svg",
      "help.svg"
    ],
    icons: [
      "home.svg",
      "instruments.svg",
      "faq.svg",
      "about-us.svg",
    ]
  }),
  computed: {
    menus() {
      return this.$store.getters.menus;
    },
    currentUrl() {
      return this.$router.currentRoute;
    },
    isHidden() {
      return this.$store.getters.isHidden;
    }
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  background: #fff;

  margin-top: 90px;
  height: 100%;
  z-index: 99999;
  min-width: 200px;
  width: calc(18 * (1vw + 1vh - 1vmin));
  overflow-y: scroll;
}

.container::-webkit-scrollbar {
  width: 0;
}

.container__switched {
  min-width: 0;
  max-width: 100px;
}

.button_container {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.button_wrapper:hover {
  background: rgba(255, 234, 235, .6);
}

.button_wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  text-decoration: none;

  width: 100%;
  height: 70px;
  transition: 0.3s;
  padding: 0 36px;
}

.button_wrapper__switched {
  height: 77px;
  text-align: center;
  justify-items: center;
  flex-direction: column;
  padding: 12px 0 15px 0;
}

.button_icon {
  height: 22px;
  width: 22px;
  margin-right: 1vw;
}

.alpha {
  color: #e30611;
  font-weight: bold;

  font-size: calc(0.9 * (1vw + 1vh - 1vmin));
}

.button_text {
  color: #a5a5b6;
  font-weight: bold;

  font-size: 14px;
}

.button_text__switched {
  font-size: 11px;
}

.button_line {
  position: absolute;
  background: #e30611;

  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
}
</style>
