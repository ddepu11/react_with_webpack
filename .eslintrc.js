module.exports = {
  parser: '@babel/eslint-parser',

  ignorePatterns: ['dist'],

  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:react/recommended'],

  env: {
    browser: true,
  },

  plugins: ['react', 'prettier'],

  rules: {
    'react/react-in-jsx-scope': ['off'],
  },
};
