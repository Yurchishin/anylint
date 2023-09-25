module.exports = {
  plugins: ['jest-dom'],
  env: {
    es2024: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:jest-dom/recommended'],
}
