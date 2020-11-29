module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'parser': 'vue-eslint-parser',
  'extends': ['plugin:vue/vue3-recommended' , 'plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};