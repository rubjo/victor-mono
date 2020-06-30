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
  height: 50vw;
  max-height: 350px;
  overflow: hidden;
  opacity: 0.7;
  transition: opacity 1s 0.25s;
  &:hover {
    opacity: 1;
  }
  img {
    position: relative;
    &.powerline {
      top: -20%;
      left: -15%;
      width: 125%;
      min-width: 1000px;
      opacity: 0.4;
    }
    &.keyboard {
      top: calc(-23vw + 80px);
      left: 0;
      width: 100%;
    }
    &.merch {
      top: -12vw;
      left: 0%;
      width: 100%;
      min-width: 800px;
    }
    &.specimen {
      top: -8%;
      left: -50%;
      width: 200%;
    }
    &.glyphs {
      top: -3%;
      left: -15%;
      width: 130%;
    }
  }
}
</style>
