module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    /* Coding Style 相關 */
    semi: ['error', 'never'], // 結尾分號
    'linebreak-style': 0, // 作業系統 LF & CRLF 差異
    'jsx-quotes': ['warn', 'prefer-single'],
    'array-bracket-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'import/order': 'warn',
    'eol-last': 'warn',
    quotes: 'warn',
    'comma-dangle': 'warn',
    'operator-linebreak': 'warn',
    'arrow-body-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',

    /* 開發期間方便用 (建議日後開啟檢查) */
    'no-unused-vars': 'off', // 允許保留未用到的變數
    'no-console': 'off', // 允許 console.log
    'no-alert': 'off', // 允許 alert

    /* Vue Custom */
    'vue/no-unused-components': 'warn'
  }
}
