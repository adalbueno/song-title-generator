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
            <i class="far fa-heart" v-if="!isFavorite(item)" @click="addToFavorites(item)"></i>
            <i class="fas fa-heart" v-else @click="removeFromFavorites(item)"></i>
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
      return this.$store.state.expression.history
    },
    favorites () {
      return this.$store.state.expression.favorites
    }
  },
  methods: {
    addToFavorites (item) {
      this.$store.commit('addToFavorites', item)
    },
    removeFromFavorites (item) {
      this.$store.commit('removeFromFavorites', item)
    },
    isFavorite (item) {
      return this.favorites.indexOf(item) > -1
    },
    clear () {
      this.$store.commit('clearHistory')
    }
  }
}
</script>
