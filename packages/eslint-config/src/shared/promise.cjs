module.exports = {
  plugins: ['promise'],
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'promise/always-return': 'error',
    'promise/catch-or-return': [
      'error',
      {
        allowFinally: true,
      },
    ],
    'promise/no-callback-in-promise': 'error',
    'promise/no-multiple-resolved': 'error',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/valid-params': 'error',
  },
}
