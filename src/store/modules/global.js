export default {
  state: {
    loading: true,
    showIENotification: true,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    hideIENotification(state) {
      state.showIENotification = false;
    }
  },
  actions: {
    onLoading({ commit }, loading) {
      commit("setLoading", loading);
    },
    onError({ commit }, error) {
      commit("setError", error);
    },
    onHideIENotification({ commit }) {
      commit("hideIENotification");
    }
  },
  getters: {
    loading: s => s.loading,
    error: s => s.error,
    showIENotification: s => s.showIENotification,
  }
}
