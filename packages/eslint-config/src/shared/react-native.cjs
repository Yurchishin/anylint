module.exports = {
  plugins: ['react-native'],
  env: {
    es2024: true,
    browser: true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': [
      'error',
      {
        androidPathRegex: '\\.android.(js|jsx|ts|tsx)$',
        iosPathRegex: '\\.ios.(js|jsx|ts|tsx)$',
      },
    ],
  },
}
