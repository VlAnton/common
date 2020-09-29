<template>
  <div>
    <div v-if="showIENotification && !isSupportedBrowser" @click="hideNotification" class="overlay"></div>
    <div v-if="showIENotification && !isSupportedBrowser" class="ie-notification">
      <h3 style="margin: 5px; padding-top: 5px">
        Для корректной работы в Тестовой лаборатории, вам необходимо использовать Google Chrome с версии 72.
      </h3>
      <div style="margin: 5px">
        В других браузерах (напр. Internet Explorer) возможна некорректная работа интерфейса.
      </div>
      <button class="close-button" style="margin: 10px" @click="hideNotification">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showIENotification() {
      return this.$store.getters["showIENotification"];
    },
    isSupportedBrowser() {
      const isChrome = this.$ua.browser() === "Chrome";
      const browserVersion = this.$ua.browserVersion().split('.', 1).pop();
      return isChrome && parseInt(browserVersion) > 72;
    }
  },
  methods: {
    hideNotification() {
      this.$store.dispatch("onHideIENotification");
    }
  },
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
  width: 100%;
  height: 100%;

  opacity: 0.4;
  background: rgb(155, 155, 155);
}

.ie-notification {
  background: #fff;
  border: 1px solid rgba(151, 151, 151, 0.45);
  z-index: 100001;
  position: absolute;
  text-align: center;
  width: 50%;
  top: 35%;
  left: 25%;
  padding: 10px;
  display: block;
  border-radius: 5px;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.05);
}

.close-button {
  border-radius: 5px;
  text-align: center;
  background-color: #e30611;
  color: #fff;
  padding: 7px;
}
</style>
