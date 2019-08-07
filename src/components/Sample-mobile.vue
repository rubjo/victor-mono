<template> <!-- Go ahead and edit me -->
  <div id="app">
    <h1 class="zero-margin">
      My App!
    </h1>
    <MainView styling="italic-liga" />
  </div>
</template>

<script> /* eslint-disable */
  import MainView from './components/MainView.vue'

  export default {
    components: { MainView },
    methods: {
      init () {
/*ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅÄÖ
  abcdefghijklmnopqrstuvwxyzæøåäö
   АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЮЯ
   абвгдежзийклмнопрстуфхцчшщьюя
     ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ
     αβγδεζηθικλμνξοπρστυφχψω
    1  2  3  4  5  6  7  8  9  0
 .,-;:_!"#$%&/|\§(){}[]=?*+~^@€`´<>
 <= ==> -> == === !== != <- <== >=
*/

// An empty arrow function returns undefined
let empty = () => {}

const simple = a => a > 15 ? 15 : a 
simple(16) // 15
simple(10) // 10

let max = (a, b) => a > b ? a : b

// Easy array filtering, mapping, ...
const arr = [5, 6, 13, 0, 1, 18, 23]
const sum = arr.reduce((a, b) => a + b)
const even = arr.filter(v => v % 2 === 0)
const double = arr.map(v => v * 2)

// More concise promise chains
func().then(a => {
  return new Promise(
    (resolve, reject) => {
      if (a !== 1) resolve()
      else reject(
        new Error('This aint right')
      )
    }
  )
}).then(b => {
  // ...
}).catch(err => {
  handle(err)
})

// Parameterless arrow functions
// that are visually easier to parse
setTimeout(() => {
  console.log('I happen sooner')
  setTimeout(() => {
    // deeper code
    console.log('I happen later')
  }, 1)
}, 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './global-variables.scss';

  #app {
    font-family: 'VictorMono', monospace;
    line-height: 42;
    color: $wild-gradient;
  }
  // Mwwhooahhaha, they'll never know
  // what hit them
  h1 {
    position: absolute;
    top: 0;
    right: -1000px;
  }
</style>
