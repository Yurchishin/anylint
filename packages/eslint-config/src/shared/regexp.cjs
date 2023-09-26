module.exports = {
  plugins: ['regexp'],
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:regexp/recommended'],
  rules: {
    'regexp/strict': 'off',
  },
}
