module.exports = {
  parser: '@babel/eslint-parser',

  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:react/recommended'],

  env: {
    browser: true,
  },

  plugins: ['react', 'prettier'],

  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],

    'react/react-in-jsx-scope': ['off'],
  },
};
