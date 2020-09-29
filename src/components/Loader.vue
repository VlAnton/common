<template>
  <div class="loader">
    <div style="display: flex; margin:0 auto;">
      <div class="text">Загрузка</div>
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #f6f4fc;

  right: 0;
  height: 100vh;
  z-index: 90000;
  padding: 2rem 3rem;
  width: calc(100vw - 12 * (1vw + 1vh - 1vmin));
}

.dots {
  display: flex;
  position: relative;
  align-items: flex-end;

  margin-bottom: 5px;
  animation: dots 1.5s ease infinite 1s;
  width: 100px;
}

.text {
  font-size: 2em;
  font-weight: bold;
  color: #e30611;
}

.dot {
  position: relative;
  background-color: #e30611;

  width: 7px;
  height: 7px;
  margin-right: 10px;
  border-radius: 100%;
}

.dot:nth-child(1) {
  width: 0px;
  height: 0px;
  margin: 5px;
  margin-right: 15px;
  animation: show-dot 1.5s ease-out infinite 1s;
}

@keyframes dots {
  0% {
    left: -10px;
  }
  20%,
  100% {
    left: 10px;
  }
}

@keyframes show-dot {
  0%,
  20% {
    width: 0px;
    height: 0px;
    margin: 5px;
    margin-right: 15px;
  }
  30%,
  100% {
    width: 7px;
    height: 7px;
    margin: 0px;
    margin-right: 10px;
  }
}
</style>
