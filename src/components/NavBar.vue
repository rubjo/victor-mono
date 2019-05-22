<template>
  <transition name="el-zoom-in-top">
    <div
      v-show="show"
      class="navbar"
    >
      <a
        v-scroll-to="'#top'"
        href="#"
      >
        Top</a> •
      <a
        v-scroll-to="'#try'"
        href="#"
      >
        Try</a> •
      <a
        v-scroll-to="'#why'"
        href="#"
      >
        Why</a> •
      <a
        v-scroll-to="'#download'"
        href="#"
      >
        Download</a> •
      <a
        v-scroll-to="'#faq'"
        href="#"
      >
        FAQ</a> •
      <a
        v-scroll-to="'#credits'"
        href="#"
      >
        Credits</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    show: Boolean
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .navbar {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 32px;
    padding: 1vw 0;
    font-size: max(1.6vw, 16px);
    line-height: calc(32px + 0.01vw);
    color: #fff;
    text-align: center;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        font-style: italic;
      }
    }
  }
</style>
