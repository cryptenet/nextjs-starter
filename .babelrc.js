const babelConfig = {
    presets: ['next/babel'],
    plugins: [['babel-plugin-twin', { debug: false }], 'babel-plugin-macros'],
};

module.exports = babelConfig;
