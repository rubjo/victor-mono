<template>
  <span
    :style="{ height, width: computedWidth }"
    class="loader"
  />
</template>

<script>
export default {
  name: `Loader`,
  props: {
    maxWidth: {
      default: 100,
      type: Number
    },
    minWidth: {
      default: 100,
      type: Number
    },
    height: {
      default: `1em`,
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  computed: {
    computedWidth () {
      return this.width ||
        `${Math.floor((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)}%`
    }
  }
}
</script>

<style lang="scss">
.loader {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  background-color: #595959;
}
</style>
