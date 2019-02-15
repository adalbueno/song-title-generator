<template>
  <ul class="main-menu">
    <router-link class="main-menu__item" tag="li" to="/">
      <a class="main-menu__item__link">
        <i class="fas fa-plus-circle"></i>
        <span class="main-menu__item__link__text">Generate</span>
      </a>
    </router-link>
    <router-link class="main-menu__item" tag="li" to="/history">
      <a class="main-menu__item__link">
        <i class="fas fa-list"></i>
        <span class="notification__count" :class="{ active: history > 1 }">{{ history }}</span>
        <span class="main-menu__item__link__text">History</span>
      </a>
    </router-link>
    <router-link class="main-menu__item" tag="li" to="/my-ideas">
      <a class="main-menu__item__link">
        <i class="far fa-heart"></i>
        <span class="notification__count" :class="{ active: myIdeas }">{{ myIdeas }}</span>
        <span class="main-menu__item__link__text">My Ideas</span>
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {
  computed: {
    history () {
      return this.$store.state.idea.history.length
    },
    myIdeas () {
      return this.$store.state.idea.myIdeas.length
    }
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables';

.main-menu {
  display: flex;
  background: rgba(0, 0, 0, .1);

  &__item {
    display: flex;
    flex: 1;
    transition: all .2s;

    &.router-link-exact-active {
      font-weight: bold;
      background: rgba(0, 0, 0, .1);

    }

    &__link {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: $main-font-color;
      text-align: center;
      text-decoration: none;
      position: relative;
      font-size: $main-font-size;
      padding: $main-font-size / 2;

      &__text {
        margin-top: $main-font-size / 4;
      }

      .notification__count {
          position: absolute;
          top: 0;
          left: calc(50% + #{$main-font-size / 2});
          background: #c00;
          width: 0;
          height: 0;
          display: block;
          font-size: $main-font-size / 1.5;
          border-radius: 50%;
          line-height: 20px;
          transition: all .2s;
          overflow: hidden;

          &.active {
            width: 20px;
            height: 20px;
          }
      }
    }
  }
}
</style>
