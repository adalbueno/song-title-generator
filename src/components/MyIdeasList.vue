<template>
  <div class="myIdeas">
    <h1>My Ideas</h1>
    <div class="content">
      <ul class="list" v-if="myIdeas.length">
        <li class="list__item"
          v-for="(idea, index) in myIdeas"
          :key="index">
          <span class="title">{{ idea.title }}</span>
          <div class="list__item__actions">
            <i class="far fa-edit" @click="edit(index)"></i>
            <i class="fas fa-minus-circle" @click="remove(idea)"></i>
          </div>
        </li>
      </ul>
      <p v-else>No saved ideas found so far.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    myIdeas () {
      return this.$store.state.idea.myIdeas
    }
  },
  methods: {
    remove (idea) {
      this.$store.commit('removeFromMyIdeas', idea)
    },
    edit (index) {
      this.$router.push(`/my-ideas/edit/${index}`)
    }
  }
}
</script>
