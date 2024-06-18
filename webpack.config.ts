const path = require('path');

module.exports = {
    devtool: false,
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    node: {
        global: false,
        __filename: true,
        __dirname: true,
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public'),
    },
  };