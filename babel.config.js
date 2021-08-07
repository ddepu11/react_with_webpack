const mode = process.env.NODE_ENV;

const plugins = [];

if (mode === 'development') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],

  plugins,
};
