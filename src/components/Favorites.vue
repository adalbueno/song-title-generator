<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <div class="content">
      <ul class="list" v-if="favorites.length">
        <li class="list__item"
          v-for="(item, index) in favorites"
          :key="index">
          <span class="title">{{ item }}</span>
          <div class="list__item__actions">
            <i class="fas fa-minus-circle" @click="removeFromFavorites(item)"></i>
          </div>
        </li>
      </ul>
      <p v-else>No favorites found so far.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites () {
      return this.$store.state.expression.favorites
    }
  },
  methods: {
    removeFromFavorites (item) {
      this.$store.commit('removeFromFavorites', item)
    }
  }
}
</script>
