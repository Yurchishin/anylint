const getProjects = require('./utils/index.cjs')

module.exports = {
  utils: { getProjects },
  rules: {
    'scope-enum': context => getProjects(context).then(packages => [2, 'always', ['workspace', ...packages]]),
  },
}
