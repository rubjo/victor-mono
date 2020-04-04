<template>
  <div class="horizontal-large-image">
    <img
      :class="image"
      :src="imagePath"
    >
  </div>
</template>
<script>

export default {
  name: 'CodeView',
  props: {
    image: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    imagePath () { return require(`../assets/img/${this.image}-${this.theme}.png`) }
  },
  mounted () {
  },
  methods: {
  }
}

</script>
<style
  lang="scss"
>
.horizontal-large-image {
  width: 100%;
  height: 37vw;
  overflow: hidden;
  opacity: 0.4;
  img {
    position: relative;
    &.specimen {
      top: -25%;
      left: -50%;
      width: 200%;
    }
    &.powerline {
      top: -112%;
      left: -9%;
      width: 115%;
      min-width: 1000px;
    }
    &.glyphs {
      top: -3%;
      left: 0;
      width: 100%;
    }
  }
}
</style>
