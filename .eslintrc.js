module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error'],
    // ↓末尾のセミコロンを許容する。
    // 'comma-dangle': ['error', 'only-multiline'],
    // ↓空白行に対してwarnのみ出るようにする。
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    //
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    //
    // "camelcase": ["error", {"allow": ["required_if"]}]
    camelcase: ['error', { ignoreImports: true, properties: 'never' }],
  },
}
