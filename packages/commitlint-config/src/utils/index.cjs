const { glob } = require('glob')
const readPackageUp = require('read-pkg-up')
const findWorkspaceRoot = require('find-yarn-workspace-root')

const getUniqueArrayValues = array => [...new Set(array)]

const getWorkspacePatterns = packageJson => {
  const { workspaces } = packageJson

  return Array.isArray(workspaces) ? workspaces : [...workspaces.packages, ...workspaces.nohoist]
}

const getWorkspaceProjectPaths = (workspace, rootPackageJsonPath) =>
  glob(workspace, {
    cwd: findWorkspaceRoot(),
  }).then(folders => folders.map(folder => rootPackageJsonPath.replace('/package.json', `/${folder}`)))

const removePossibleScopeFromPackageName = packageName => {
  const scopeIndex = packageName.indexOf('/')
  return scopeIndex > -1 ? packageName.slice(scopeIndex + 1) : packageName
}

const getProjectName = projectPath =>
  readPackageUp({ cwd: projectPath })
    .then(({ packageJson }) => packageJson.name)
    .then(removePossibleScopeFromPackageName)

const getProjects = () =>
  readPackageUp({
    cwd: findWorkspaceRoot(),
  })
    .then(({ packageJson, path }) =>
      Promise.all(getWorkspacePatterns(packageJson).map(workspace => getWorkspaceProjectPaths(workspace, path))),
    )
    .then(folders => folders.flat())
    .then(projectPaths => Promise.all(projectPaths.map(getProjectName)))
    .then(getUniqueArrayValues)

module.exports = getProjects
