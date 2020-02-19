const CopyPlugin = require.main.require('copy-webpack-plugin');
const webpack = require.main.require('webpack');
const dotenv = require.main.require('dotenv');

// environment variables from https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
module.exports = () => {
    // call dotenv and it will return an Object with a parsed key
    const env = dotenv.config().parsed;

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((acc, next) => {
        acc[`process.env.${next}`] = JSON.stringify(env[next]);
        return acc;
    }, {});

    return {
        // Set debugging source maps to be "inline" for
        // simplicity and ease of use
        devtool: 'source-map',

        // The application entry point
        entry: './src/index.tsx',

        // Where to compile the bundle
        // By default the output directory is `dist`
        output: {
            filename: 'bundle.min.js'
        },

        // Supported file loaders
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },

        // File extensions to support resolving
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.scss'],
            modules: [`${__dirname}/node_modules`]
        },

        resolveLoader: {
            modules: [`${__dirname}/node_modules`]
        },

        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'styled'
        },

        plugins: [
            new CopyPlugin([
                { from: 'node_modules/react/umd/react.production.min.js', to: 'externals/' },
                { from: 'node_modules/react-dom/umd/react-dom.production.min.js', to: 'externals/' },
                { from: 'node_modules/styled-components/dist/styled-components.min.js', to: 'externals/' }
            ]),
            new webpack.DefinePlugin(envKeys)
        ]
    };
};
