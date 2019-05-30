import webpack from 'webpack';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const mode = process.env.NODE_ENV;
const isProduction = mode === 'production';

const config = {
    __MODE__: JSON.stringify(mode || 'production'),
};

export default {
    mode,
    entry: {
        'index': ['./src/index.ts']
    },
    output: {
        path: path.resolve(__dirname, '_bundles'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'sparkx',
        umdNamedDefine: true,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: isProduction ? '(none)' : 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(config),
        // new BundleAnalyzerPlugin()
    ],
    externals: {
        react: { root: 'React', amd: 'react', commonjs2: 'react', commonjs: 'react' },
        'react-dom' : { root: 'ReactDOM', amd: 'react-dom', commonjs2: 'react-dom', commonjs: 'react-dom' },
    },
};
