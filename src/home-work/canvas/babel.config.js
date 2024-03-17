module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}],
  '@babel/preset-typescript' //this allows us to use jest with typescript
  ],
};

