<template>
  <div class="service_container">
    <router-link
      :to="`/services/${service.link}`"
      class="service_wrapper"
      v-for="service in services"
      :key="service.link"
    >
      <div class="gradient" style="background: #f16254">
        <img :src="backendUrl + service.icon.url" class="icon" />
      </div>
      <div class="content">
        <h2 class="title">{{service.title}}</h2>
        <div class="description">{{service.shortDescription}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import backendUrl from "../api";

export default {
  props: {
    services: Array
  },
  data: () => ({
    backendUrl: backendUrl
  })
};
</script>

<style scoped>
.service_wrapper {
  display: flex;
  background: #fff;
  flex-direction: column;

  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);

  width: 14.7%;
  transition: 0.3s;
  min-width: 126.7px;
  max-width: 238.7px;
  border-radius: 7px;
  margin: 1rem 1rem 2rem 1rem;
}

.service_wrapper:hover {
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
}

.service_container {
  display: flex;
  flex-wrap: wrap;

  min-width: 100px;
  margin: calc(2 * (1vw + 1vh - 1vmin)) -1rem;
}

.gradient {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100px;
  border-radius: 7px 7px 0 0;
  height: calc(6.5 * (1vw + 1vh - 1vmin));
}

.content {
  min-height: fit-content;
  padding: 14px 16px;
}

.icon {
  object-fit: contain;
  background-repeat: no-repeat;

  min-height: 40px;
  background-size: 100%;
  height: calc(3.2 * (1vw + 1vh - 1vmin));
}

.title {
  font-size: 16px;
  min-height: 40px;
  margin-bottom: 0.5vw;
}

.description {
  font-size: 13px;
}

@media screen and (max-width: 900px) {
  .service_wrapper {
    width: 23%;
    min-width: 107.2px;
  }

  .title {
    font-size: 14px;
  }

  .description {
    font-size: 11px;
  }

  .content {
    padding: 9px;
  }
}

@media screen and (max-width: 1280px) {
  .service_wrapper {
    width: 22.7%;
  }
}

@media screen and (max-width: 500px) {
  .service_wrapper {
    width: 47.8%;
    max-width: none;
  }
}

@media screen and (max-width: 400px) {
  .service_wrapper {
    width: 100%;
    max-width: none;
  }
}
</style>
