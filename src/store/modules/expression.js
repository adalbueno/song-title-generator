const state = {
  history: [],
  favorites: []
}

const getters = {}

const actions = {}

const mutations = {
  addToHistory: (state, item) => {
    state.history.unshift(item)
  },
  clearHistory: (state) => {
    state.history = []
  },
  addToFavorites: (state, item) => {
    if (state.favorites.indexOf(item)) {
      state.favorites.unshift(item)
    }
  },
  removeFromFavorites: (state, item) => {
    var index = state.favorites.indexOf(item)
    state.favorites.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
