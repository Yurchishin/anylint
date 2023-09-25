module.exports = {
  plugins: ['testing-library'],
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // React
    'testing-library/await-async-events': ['error', { eventModule: 'userEvent' }],
    'testing-library/await-async-queries': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/consistent-data-testid': [
      'error',
      {
        testIdPattern: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', // Kebab-case
        testIdAttribute: ['data-testid'],
      },
    ],
    'testing-library/no-await-sync-events': ['error', { eventModules: ['fire-event'] }],
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': ['error', 'react'],
    'testing-library/no-global-regexp-flag-in-query': 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-node-access': 'error',
    'testing-library/no-promise-in-fire-event': 'error',
    'testing-library/no-render-in-lifecycle': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-wait-for-multiple-assertions': 'error',
    'testing-library/no-wait-for-side-effects': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-explicit-assert': 'off',
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-query-by-disappearance': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-user-event': 'error',
    'testing-library/render-result-naming-convention': 'error',
  },
}
