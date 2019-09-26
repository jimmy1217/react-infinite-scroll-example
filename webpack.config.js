const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = (env, argv) => {
    /** 用來判斷環境是本機開發或production */
    const isDev = argv.mode === 'development'

    /** 額外plug in */
    const plugins = [
        /** 用來生成 webpack 內可掌握的環境狀態  */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(argv.mode),
                __VERSION__: JSON.stringify(require('./package.json').version),
            },
        }),
        /** 每次打包時把產生出來的dist 清空 */
        new CleanWebpackPlugin(['dist']),
        /** 打包時顯示進度條 */
        new ProgressBarPlugin(),
        /** webpack 打包時使用html 模板生成 */
        new HtmlWebPackPlugin({
            template: './src/index.ejs',
            filename: './index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
            },
            hash: true,
            cache: false,
            title: 'react-infinite-scroll',
        }),
        /** 使用複製資料 plugin */
        new CopyWebpackPlugin([
            { from: './public/favicons/', to: './favicons/', ignore: ['.*'] },
        ]),
    ]

    const alias = {
        'api': path.resolve(__dirname, './src/actions/api.js'),
        'components': path.resolve(__dirname, './src/components/'),
        'containers': path.resolve(__dirname, './src/containers/'),
        'actions': path.resolve(__dirname, './src/actions/'),
        'store': path.resolve(__dirname, './src/store/'),
        'storeAction': path.resolve(__dirname, './src/store/storeAction'),
        'public': path.resolve(__dirname, './public'),
    };

    const devServer = isDev
        ? {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000,
            inline: true,
            hot: true,
        }
        : undefined

    if (isDev) {
        plugins.push(
            /** 開啟HMR模式 */
            new webpack.HotModuleReplacementPlugin(),
        )
    } else {
        plugins.push(
            /** service worker */
            new OfflinePlugin()
        )
        
        alias['react'] = "preact/compat";
        alias['react-dom'] = "preact/compat";
        /** 等 nginx 有支援 static gzip 時再解開, 做gzip壓縮 */
        plugins.push(
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$/,
                threshold: 10240,
                minRatio: 0.8,
            })
        )
    }

    return {
        mode: isDev ? 'development' : 'production',
        optimization: {
            /** 共用代碼偵測 */
            splitChunks: {
                chunks: 'all',
            },
            /** 若為production 時,minify + uglify 處理 */
            minimizer: [
                new UglifyJSPlugin({
                    parallel: true,
                    sourceMap: true,
                    uglifyOptions: {
                        compress: {
                            drop_console: true,
                        },
                        output: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
        /** 設定進入點 */
        entry: {
            app: ['babel-polyfill', path.resolve(__dirname, './src/root.js')],
        },
        /** 設定打包出來後的目錄 */
        output: {
            path: path.resolve(__dirname, './dist/'),
            publicPath: "/",
            filename: '[name].[hash:4].js',
        },
        /** source map 映射方式 */
        devtool: isDev ? 'source-map' : 'cheap-module-source-map',
        /** 下面都在解析, 看到甚麼附檔名,用甚麼方式處裡 */
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: 'html-loader',
                        },
                        {
                            loader: 'markdown-loader',
                            options: {
                                /* your options here */
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')],
                            },
                        },
                    ],
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    include: [path.resolve('src')],
                    exclude: '/node_modules/',
                    options: {
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel'],
                    },
                },

                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|mp3|wav|csv)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 30000,
                        name: 'assets/[name].[ext]',
                    },
                },
            ],
        },
        plugins,
        /** 開啟webpack devServer,做HMR */
        devServer,
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            // import alias
            alias: alias,
            // import 時可不寫附檔名
            extensions: ['.js', '.css', '.scss', '.json'],
        },
    }
}

module.exports = config
