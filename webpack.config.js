const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: argv.mode === 'production' ? 'frontend-utils-js.min.js' : 'frontend-utils-js.js',
        library: 'frontend-utils-js',
        libraryTarget: 'umd', // Supporta CommonJS, AMD e globali
        globalObject: 'this', // Evita problemi con Node.js
    },
    mode: argv.mode || 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimize: argv.mode === 'production',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
});
