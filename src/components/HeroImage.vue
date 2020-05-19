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
      default: 'any'
    },
    suffix: {
      type: String,
      default: 'png'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    imagePath () { return require(`../assets/img/${this.image}-${this.theme}.${this.suffix}`) }
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
  opacity: 0.7;
  transition: opacity 1s 0.25s;
  &:hover {
    opacity: 1;
  }
  img {
    position: relative;
    &.keyboard {
      top: -35%;
      left: 0%;
      width: 100%;
    }
    &.merch {
      top: -35%;
      left: 0%;
      width: 100%;
    }
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
      opacity: 0.4;
    }
    &.glyphs {
      top: -3%;
      left: 0;
      width: 100%;
    }
  }
}
</style>
