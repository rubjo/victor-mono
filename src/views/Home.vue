<template>
  <div class="home">
    The
    <span class="property" />
    programming font
  </div>
</template>

<script>
import Typed from 'typed.js'

export default {
  name: 'Home',
  mounted () {
    var options = {
      strings: [
        'friendly',
        'elegant',
        'professional',
        'crisp',
        'slender',
        'consistent',
        'fancy',
        'nice',
        'cool',
        'must-have',
        'anti-Trumpian',
        'scannable',
        'readable',
        'enjoyable',
        'lovely',
        'effective',
        'perfect',
        'ideal'],
      startDelay: 1000,
      typeSpeed: 75,
      backSpeed: 20,
      smartBackspace: true,
      backDelay: 2000,
      shuffle: true
    }

    // Test

    var typed = new Typed('.property', options)
  }
}
</script>
