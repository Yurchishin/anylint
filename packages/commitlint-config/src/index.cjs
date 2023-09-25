const config = require('@commitlint/config-conventional')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'scope-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 10],
  },
}
