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
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background-image:
      linear-gradient(
        90deg,
        rgba(#aaa, 0) 0,
        rgba(#aaa, 0.2) 20%,
        rgba(#aaa, 0.5) 60%,
        rgba(#aaa, 0)
      );
    transform: translateX(-100%);
    animation: shimmer 5s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
