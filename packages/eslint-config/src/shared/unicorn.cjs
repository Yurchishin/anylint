module.exports = {
  plugins: ['unicorn'],
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'unicorn/better-regex': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': [
      'error',
      {
        checkArrowFunctions: false,
      },
    ],
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error', // ??
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-lonely-if': 'error',
    'no-negated-condition': 'error',
    'unicorn/no-negated-condition': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-set-size': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/switch-case-braces': 'error',
    'unicorn/template-indent': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-switch': ['error', { minimumCases: 5 }],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/relative-url-style': 'error',
    'unicorn/text-encoding-identifier-case': 'error',

    // 'unicorn/no-unused-properties': 'off',
    // 'unicorn/import-style': 'off',
    // 'unicorn/no-array-callback-reference': 'off',
    // 'unicorn/no-array-for-each': 'off',
    // 'unicorn/no-array-reduce': 'off',
    // 'unicorn/no-keyword-prefix': 'off',
    // 'unicorn/prefer-json-parse-buffer': 'off',
    // 'unicorn/no-null': 'off',
    // 'unicorn/no-useless-undefined': 'off',
    // 'unicorn/prefer-export-from': 'off',
    // 'unicorn/prefer-module': 'off',
    // 'unicorn/prefer-query-selector': 'off',
    // 'unicorn/prefer-ternary': 'off', // ?
    // Turned off because we can't distinguish `widow.postMessage` and `{Worker,MessagePort,Client,BroadcastChannel}#postMessage()`
    // 'unicorn/require-post-message-target-origin': 'off',
    // See #1396
    // 'unicorn/string-content': 'off',
  },
}
