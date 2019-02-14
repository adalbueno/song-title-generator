<template>
  <div class="expressions">
    <div class="controls" v-if="controls">
      <input type="checkbox" v-model="includeVerbs"> Verbs?
      <input type="checkbox" v-model="includeSubjects"> Subjects?
    </div>

    <div class="expression">
      <h1 v-html="phraseHTML"></h1>
    </div>

    <div class="actions">
      <button @click="update">Generate new {{ type }}</button>
    </div>
  </div>
</template>

<script>
import database from '../database'

export default {
  props: {
    controls: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'song title'
    }
  },
  data: () => ({
    pronoun: {
      subject: '',
      possessive: ''
    },
    adjective: '',
    noun: '',
    verb: '',
    includeVerbs: false,
    includeSubjects: false,
    storageKeys: {
      history: 'history',
      favorites: 'favorites'
    }
  }),
  mounted () {
    // this.getHistoryFromStorage()
    this.update()
  },
  computed: {
    phrase () {
      const arr = [{
        plain: `${this.adjective} ${this.noun}`,
        html: `${this.adjective} ${this.noun}`
      }, {
        plain: `${this.noun} of ${this.noun2}`,
        html: `${this.noun}<span class="connector"> of </span>${this.noun2}`
      }, {
        plain: `the ${this.noun}'s ${this.noun2}`,
        html: `<span class="connector">the</span> ${this.noun}'s ${this.noun2}`
      }, {
        plain: `the ${this.noun} of the ${this.noun2}`,
        html: `<span class="connector">the</span> ${this.noun} <span class="connector">of the</span> ${this.noun2}`
      }, {
        plain: `${this.noun} in the ${this.noun2}`,
        html: `${this.noun} <span class="connector">in the</span> ${this.noun2}`
      }, {
        plain: `${this.adjective} ${this.adjective2} ${this.noun}`,
        html: `${this.adjective} ${this.adjective2} ${this.noun}`
      }, {
        plain: `what a ${this.adjective} ${this.noun}`,
        html: `<span class="connector">what a</span> ${this.adjective} ${this.noun}`
      }, {
        plain: `what a ${this.adjective} ${this.adjective2} ${this.noun}`,
        html: `<span class="connector">what a</span> ${this.adjective} ${this.adjective2} ${this.noun}`
      }, {
        plain: `${this.pronoun.possessive} ${this.adjective} ${this.noun}`,
        html: `<span class="connector">${this.pronoun.possessive}</span> ${this.adjective} ${this.noun}`
      }, {
        plain: `${this.pronoun.subject} ${this.verb} ${this.pronoun.possessive} ${this.adjective} ${this.noun}`,
        html: `<span class="connector">${this.pronoun.subject}</span> ${this.verb} <span class="connector">${this.pronoun.possessive}</span> ${this.adjective} ${this.noun}`
      }]

      return arr[this.getRandomNumber(arr.length - 1)]
    },
    phraseHTML () {
      return this.phrase.html
    }
  },
  methods: {
    update () {
      this.adjective = this.getTerm('adjectives')
      this.adjective2 = this.getTerm('adjectives')
      this.noun = this.getTerm('nouns')
      this.noun2 = this.getTerm('nouns')
      this.pronoun.possessive = this.includeSubjects ? this.getPronoun('possessive') : ''

      if (this.includeVerbs) {
        this.pronoun.subject = this.getPronoun('subject')
        this.pronoun.possessive = this.getPronoun('possessive')
        this.verb = this.getTerm('verbs')
      } else {
        this.pronoun.subject = ''
        this.verb = ''
      }

      this.$store.commit('addToHistory', this.phrase.plain)
    },
    getRandomNumber (max = 0) {
      return Math.round(Math.random() * max)
    },
    getList (type) {
      return database[type]
    },
    getTerm (type) {
      const list = this.getList(type)
      const randomIndex = this.getRandomNumber(list.length - 1)

      return list[randomIndex]
    },
    getPronoun (type) {
      const list = this.getList('pronouns')[type]
      const randomIndex = this.getRandomNumber(list.length - 1)

      return list[randomIndex]
    },
    getHistoryFromStorage () {
      const storedHistory = localStorage.getItem(this.storageKeys.history)

      this.history = JSON.parse(storedHistory) || []
    },
    setHistoryOnStorage () {
      localStorage.setItem(this.storageKeys.history, JSON.stringify(this.history))
    }
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables';

.expressions {
  display: flex;
  flex-direction: column;
  width: 100%;

  .expression {
    flex: 1;
  }
}

button {
  border: 1px solid darken($main-bg-color, 30%);
  color: darken($main-bg-color, 30%);
  padding: $main-font-size;
  background: $main-font-color;
  text-transform: uppercase;
  font-size: $main-font-size;
  outline: none;
  cursor: pointer;
  width: 100%;
}

</style>
