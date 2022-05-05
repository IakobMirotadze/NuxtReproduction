module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: "module",
    ecmaVersion: 2018
  },
  extends: [
    '@nuxtjs',
    "eslint:recommended",
    'plugin:nuxt/recommended'
  ],
  plugins: [
    "vue"
  ],
  // add your custom rules here
  rules: {
    "strict": "error",
    "no-prototype-builtins": "off",
    "no-mixed-spaces-and-tabs": "off",
    "vue/no-mutating-props": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-use-v-if-with-v-for": "off",
    "indent": [
      "error",
      "tab"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}
