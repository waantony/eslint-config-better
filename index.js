module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint-config-better/src/PossibleErrors.js',
    'eslint-config-better/src/ES6.js',
    'eslint-config-better/src/BestPractices.js',
    'eslint-config-better/src/StylisticIssues.js',
    'eslint-config-better/src/Variables.js',
    'eslint-config-better/src/StrictMode.js',
    // require.resolve('src/PossibleErrors.js'),
    // require.resolve('src/ES6.js'),
    // require.resolve('src/BestPractices.js'),
    // require.resolve('src/StylisticIssues.js'),
    // require.resolve('src/Variables.js'),
    // require.resolve('src/StrictMode.js'),
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
}
