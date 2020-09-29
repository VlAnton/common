import backendUrl from "../../api";
import axios from "axios";

export default {
  state: {
    searchResult: {},
    searchStr: ""
  },
  mutations: {
    setData(state, searchResult) {
      state.searchResult = searchResult;
    },
    setSearchStr(state, searchStr) {
      state.searchStr = searchStr;
    }
  },
  actions: {
    fetch({ commit }, query) {
      const url = `${backendUrl}/global-search/find?str=${encodeURIComponent(query)}`;
      axios.get(url).then(searchResult => commit("setData", searchResult.data));
    },
    onChangeSearchStr({ commit }, searchStr) {
      commit("setSearchStr", searchStr);
    }
  },
  getters: {
    searchResult: s => s.searchResult,
    searchStr: s => s.searchStr
  }
}
