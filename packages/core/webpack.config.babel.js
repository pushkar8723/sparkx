import path from 'path';

const mode = process.env.NODE_ENV;

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
    devtool: '(none)',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        ],
    },
    externals: {
        react: { root: 'React', amd: 'react', commonjs2: 'react', commonjs: 'react' },
        'react-dom' : { root: 'ReactDOM', amd: 'react-dom', commonjs2: 'react-dom', commonjs: 'react-dom' },
    },
};
