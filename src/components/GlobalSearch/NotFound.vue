<template>
  <div class="not_found">
    <!-- <img src="@/static/not-found.svg" /> -->
    <div class="text_container">
      <b>Ничего не найдено по запросу:</b>
      <div class="search_str">{{searchStr}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchStr: String
  }
}
</script>

<style scoped>
.not_found {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
}

.text_container {
  max-width: 75vmin;
  width: 75vmin;
  position: absolute;
  text-align: center;

  top: 40%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
}

img {
  width: 100%;
}

b {
  color: #4B4771;
  font-size: 18px;
  line-height: 21px;
}

.search_str {
  margin-top: 5.5px;
  font-size: 14px;
  line-height: 18px;

  color: #4B4771;
  max-width: 30vmin;
  word-wrap: break-word;
  margin-right: auto;
  margin-left: auto;
}

@media screen and (max-width: 1150px) {
  b {
    font-size: 15px;
  }

  .search_str {
    font-size: 11px;
  }
}

@media screen and (max-width: 864px) {
  .not_found {
    height: 85px;
    background: #fff;
  }

  .text_container {
    padding: 0 20px 0 20px;
    background: #fff;
  }

  img {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .not_found {
    height: 100px;
  }
}
</style>
