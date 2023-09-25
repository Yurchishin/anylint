const createImportConfig = isTs => {
  const extensions = isTs ? ['.ts', '.tsx'] : ['.js', '.jsx']
  const joinedExtensions = extensions.join(',')

  const settings = isTs
    ? {
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          '@typescript-eslint/parser': extensions,
        },
        'import/resolver': {
          node: true,
          typescript: true,
        },
      }
    : {
        'import/resolver': {
          node: true,
        },
      }

  return {
    plugins: ['import'],
    env: {
      es2024: true,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/extensions': extensions,
      'import/docstyle': ['jsdoc'],
      ...settings,
    },
    rules: {
      'import/export': 'error',
      'import/no-deprecated': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            `**/*.setup.{${joinedExtensions}}`,
            `**/*.setup.*.{${joinedExtensions}}`,
            `**/*.config.{${joinedExtensions}}`,
            `**/*.config.*.{${joinedExtensions}}`,
            `**/.eslintrc.{${joinedExtensions}}`,
          ],
          optionalDependencies: false,
        },
      ],
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-amd': 'error',
      'import/default': 'error',
      'import/named': isTs ? 'off' : 'error',
      'import/namespace': 'error',
      // 'import/no-absolute-path': 'error',
      'import/no-cycle': ['error', { maxDepth: 1 }],
      'import/no-self-import': 'error',
      'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/first': 'error',
      'import/max-dependencies': ['error', { max: 25 }],
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-anonymous-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      'import/order': [
        'error',
        {
          warnOnUnassignedImports: true,
          'newlines-between': 'never',
          pathGroupsExcludedImportTypes: [],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              patternOptions: { matchBase: true },
              position: 'before',
            },
          ],
          distinctGroup: false,
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'object', 'unknown'],
        },
      ],
    },
  }
}

module.exports = {
  createImportConfig,
}
