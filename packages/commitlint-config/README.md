# @anylint/commitlint-config

## ![AnyLint Logo](https://res.cloudinary.com/da0ggymug/image/upload/v1695653317/logo_full.25.svg)

**@anylint/commitlint-config** is a configuration package for [Commitlint](https://commitlint.js.org/) designed to enforce consistent and conventional commit messages within your projects. This standardization makes it easier to track and manage changes in your codebase.

## Features 🚀

- **Conventional Commit Messages**: Promotes the use of conventional commit message formats, such as [Conventional Commits](https://www.conventionalcommits.org/), to enhance codebase manageability.

- **Workspace Scopes**: Offers support for monorepo setups by enabling you to specify workspace scopes in commit messages.

## Installation

To install, run the following command:

```bash
npm install @anylint/commitlint-config @commitlint/cli --save-dev
```

## Prompts

Add `commit` script to your `package.json`:

```json
{
  "scripts": {
    "commit": "commit"
  }
}
```

Run `npm run commit` to commit your changes.

## Commit Message Format

The commit message format enforced by this configuration is based on the [Conventional Commits](https://www.conventionalcommits.org/) specification. This specification defines a set of rules for creating commit messages that are easy to read and parse by both humans and machines.

The following is an example of a commit message that follows the Conventional Commits specification:

```
feat(core): add new feature
```

## Configuration

### Monolithic Repository

**Edit `commitlint.config.js`**:

```javascript
module.exports = {
  extends: ['@anylint/commitlint-config'],
  rules: {
    // Add additional rules here.
  },
}
```

### Monorepo Repository

**Edit `commitlint.config.js`**:

```javascript
module.exports = {
  extends: ['@anylint/commitlint-config', '@anylint/commitlint-config/workspace-scopes'],
  rules: {
    // Add additional rules here.
  },
}
```

Workspace scopes are automatically inferred from the `workspaces` property in your `package.json` file and added to the `scopes` property in your `commitlint.config.js` file. For example, if your `package.json` file contains the following:

```json
{
  "workspaces": ["packages/core", "packages/ui"]
}
```

Then you should use `core` and `ui` as scopes in your commit messages:

```bash
$ git commit -m "feat(core): add new feature"
```

Additionally, you can use `workspace` as a scope to indicate that your commit message applies to the entire monorepo:

```bash
$ git commit -m "feat(workspace): add new feature for all packages"
```
