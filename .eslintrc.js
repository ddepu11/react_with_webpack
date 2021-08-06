module.exports = {
  parser: '@babel/eslint-parser',

  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:react/recommended'],

  plugins: ['react', 'prettier'],

  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
  },
};
