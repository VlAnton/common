<template>
  <router-link :to="url" class="notification_wrapper">
    <img src="../static/support/support.svg" style="max-height: 5vw; margin-right: 1vw" />
    <div class="notification_content">
      <h2 style="margin-bottom: 2px">{{title}}</h2>
      <p class="notification_description">{{description}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    description: String
  }
};
</script>

<style scoped>
.notification_wrapper {
  display: flex;
  position: fixed;
  background: #fff;
  align-items: center;

  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);

  right: 1vw;
  bottom: 1vw;
  z-index: 9999;
  max-width: 30vw;
  transition: 0.3s;
  padding: 1vw 2vw;
  border-radius: 10px;
}

.notification_wrapper:hover {
  transform: scale(1.01);
}

.notification_content {
  display: flex;
  flex-direction: column;

  height: 100%;
}

.notification_description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
