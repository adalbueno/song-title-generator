<template>
  <div class="history">
    <h1>History</h1>
    <div class="content">
      <ul class="list" v-if="history.length">
        <li class="list__item"
          v-for="(item, index) in history"
          :key="index">
          <span class="title">{{ item }}</span>
          <div class="list__item__actions">
            <i class="far fa-heart" v-if="!isMyIdea(item)" @click="addToMyIdeas(item)"></i>
            <i class="fas fa-heart" v-else @click="removeFromMyIdeas(item)"></i>
          </div>
        </li>
      </ul>
      <p v-else>No history so far.</p>
    </div>
    <div class="actions">
      <button @click="clear">Clear history</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    history () {
      return this.$store.state.idea.history
    },
    myIdeas () {
      return this.$store.state.idea.myIdeas
    }
  },
  methods: {
    addToMyIdeas (item) {
      this.$store.commit('addToMyIdeas', item)
    },
    removeFromMyIdeas (item) {
      this.$store.commit('removeFromMyIdeas', item)
    },
    isMyIdea (title) {
      return this.myIdeas.map((item) => item.title).indexOf(title) > -1
    },
    clear () {
      this.$store.commit('clearHistory')
    }
  }
}
</script>
