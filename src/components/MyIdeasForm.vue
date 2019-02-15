<template>
  <div class="myIdeas">
    <div class="ideaTitle">
      <input type="text" v-model="idea.title" />
    </div>

    <div class="content">
      <ul class="tabs">
        <li class="tabs__item" @click="activeTab = 'lyrics'" :class="{ active: activeTab === 'lyrics' }"><i class="fas fa-align-left"></i> Lyrics</li>
        <li class="tabs__item" @click="activeTab = 'notes'" :class="{ active: activeTab === 'notes' }"><i class="far fa-comments"></i> Notes</li>
      </ul>
      <div class="tabs__panel">
        <textarea v-if="activeTab === 'lyrics'" v-model="idea.lyrics" />
        <textarea v-if="activeTab === 'notes'" v-model="idea.notes" />
      </div>
    </div>

    <div class="actions">
      <button @click="back">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      idea: {},
      activeTab: 'lyrics'
    }
  },
  mounted () {
    const index = this.$route.params.index
    const myIdeas = this.$store.state.idea.myIdeas

    if (myIdeas[index]) {
      this.idea = myIdeas[index]
      return
    }

    this.back()
  },
  methods: {
    back () {
      this.$router.push(`/my-ideas`)
    }
  }
}
</script>
