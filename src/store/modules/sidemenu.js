import backendUrl from "../../api";
import axios from "axios";

export default {
  state: {
    menus: [],
    isHidden: false,
  },
  mutations: {
    setMenu(state, menus) {
      state.menus = menus;
    },
    setIsHidden(state, isHidden) {
      state.isHidden = isHidden;
    }
  },
  actions: {
    fetchMenu({ commit, dispatch }) {
      dispatch("onLoading", true, { root: true });
      axios.get(`${backendUrl}/menus`).then(data => {
        commit("setMenu", data.data);
        dispatch("onLoading", false, { root: true });
      });
    },
    onSwitch({ commit }, isHidden) {
      commit("setIsHidden", isHidden);
    }
  },
  getters: {
    menus: s => s.menus,
    isHidden: s => s.isHidden
  }
}
