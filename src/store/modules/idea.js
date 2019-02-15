const state = {
  history: [],
  myIdeas: []
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
  addToMyIdeas: (state, title) => {
    const idea = {
      title,
      lyrics: null,
      notes: null
    }
    if (state.myIdeas.indexOf(idea)) {
      state.myIdeas.unshift(idea)
    }
  },
  removeFromMyIdeas: (state, idea) => {
    var index = state.myIdeas.indexOf(idea)
    state.myIdeas.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
