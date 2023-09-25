module.exports = {
  plugins: ['functional'],
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'functional/functional-parameters': [
      'error',
      {
        allowRestParameter: true,
        enforceParameterCount: {
          count: 'atLeastOne',
          ignoreLambdaExpression: true,
          ignoreIIFE: true,
          ignoreGettersAndSetters: true,
        },
      },
    ],
    'functional/immutable-data': 'error',
    'functional/no-let': 'error',
    'functional/prefer-immutable-types': 'error',
    'functional/type-declaration-immutability': 'error',
    'functional/no-return-void': 'error',
    'functional/prefer-tacit': 'error',
    'functional/readonly-type': 'error',
  },
}
