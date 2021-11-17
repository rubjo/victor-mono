module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  "ignorePatterns": [
    'src/components/Sample-desktop.js',
    'src/components/Sample-mobile.vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prouduction' ? 'error' : 'off',
    'import/no-webpack-loader-syntax': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
