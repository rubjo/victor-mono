import Granim from 'granim'

export default function initGradients (element, theme) {
  const darkGradients = [
    ['#2b76b9', '#35eb93'],
    ['#cc6622', '#8c1bab'],
    ['#380036', '#0cbaba'],
    ['#85d797', '#5d4257'],
    ['#0250c5', '#d43f8d'],
    ['#13547a', '#60b0b7'],
    ['#a40606', '#d98324']
  ]

  const lightGradients = [
    ['#8af094', '#ffd1ff'],
    ['#f6d365', '#fda085'],
    ['#84fab0', '#8fd3f4'],
    ['#fa709a', '#fee140'],
    ['#4facfe', '#00f2fe'],
    ['#43e97b', '#38c9f7'],
    ['#f83600', '#f9d423']
  ]

  return new Granim({
    element,
    direction: 'diagonal',
    states: {
      'default-state': {
        gradients: theme === 'dark' ? darkGradients : lightGradients,
        transitionSpeed: 7500
      },
      'dark': {
        gradients: darkGradients,
        transitionSpeed: 7500
      },
      'light': {
        gradients: lightGradients,
        transitionSpeed: 7500
      }
    }
  })
}
