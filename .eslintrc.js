module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    './src/PossibleErrors.js',
    './src/ES6.js',
    './src/BestPractices.js',
    './src/StylisticIssues.js',
    './src/Variables.js',
    './src/StrictMode.js',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },

}
