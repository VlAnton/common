<template>
  <div>
    <div :class="`collapse slide ${collapsed && 'active'}`" @click="collapse" v-if="isCollapses">
      <div class="collapse_inner">
        <h2 class="title" :style="isAdd && 'opacity: 0.5'">{{question}}</h2>
        <button class="button_bordered">
          <img :src="isAdd ? '/plus.svg' : '/buttons/expand.svg'" style="width: 15px" />
        </button>
      </div>
      <div style="padding: 1rem 0">
        <div v-html="answer" class="answer" />
      </div>
    </div>
    <router-link :to="`/faq/${id}`" v-if="!isCollapses">
      <div class="collapse slide">
        <div class="collapse_inner">
          <h2 class="title" :style="isAdd && 'opacity: 0.5'">{{question}}</h2>
          <button class="button_bordered">
            <img :src="isAdd ? '/plus.svg' : '/buttons/expand.svg'" style="width: 15px" />
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    question: String,
    answer: String,
    isCollapses: Boolean,
    isAdd: Boolean
  },
  data: () => ({
    collapsed: false
  }),
  methods: {
    collapse() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style scoped>
.collapse {
  cursor: pointer;
  overflow: hidden;
  background-color: #fff;

  transition: all 0.4s;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  margin: 0px;
  margin: 1rem 0;
  padding: 0 15px;
  max-height: 55px;
  border-radius: 5px;
}

.collapse:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.05);
}

.collapse * {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.collapse.active {
  color: #444;
  cursor: default;
  background-color: rgba(255, 255, 255, 0.9);

  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s, max-height 1s;

  z-index: 66;
  padding: 0 15px;
  max-height: 3000px;
}

.title {
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  cursor: pointer !important;

  height: 50px;
  font-size: 17px;
  margin-right: 15px;
}

.answer {
  font-size: 15px;
}

.collapse_inner {
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-between;

  width: 100%;
}

.button_bordered {
  display: flex;
  align-items: center;
  background: #f2e0e6;
  justify-content: center;

  width: 25px;
  height: 25px;
  min-height: 25px;
  min-width: 25px;
  border-radius: 5px;
  transition: 0.3s;
}

.button_bordered:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 600px) {
  .title {
    height: 75px;
  }

  .collapse {
    max-height: 75px;
  }
}

@media screen and (max-width: 450px) {
  .title {
    height: 200px;
  }

  .collapse {
    max-height: 200px;
  }
}
</style>

