module.exports = {
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:jsdoc/recommended-typescript-error'],
  rules: {
    'jsdoc/require-jsdoc': 'off',
  },
}
