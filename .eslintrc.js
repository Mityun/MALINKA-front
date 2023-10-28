module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-env"],
    },
  },

  ignorePatterns: ['.eslintrc.js'],

  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],

  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['simple-import-sort', 'import', 'prettier'],
  rules: {
    curly: 'error',
    'no-console': 'off',

    'no-unused-vars': 'off',
    'no-prototype-builtins': 'warn',
    'eqeqeq': 'warn',
    'camelcase': 'warn',

    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'import/newline-after-import': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',

    'prettier/prettier': 'warn',
    'vue/no-mutating-props': 'warn',
    'vue/no-parsing-error': 'warn',
    'vue/no-template-shadow': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/return-in-computed-property': 'warn',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
