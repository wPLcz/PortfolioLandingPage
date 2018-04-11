var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "./js/in.js",
        './scss/main.scss'
    ],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {url: false}
                        },
                        {loader: 'sass-loader'}
                    ]
                })
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            }

        ]
    },
    devServer: {
        filename: './js/out.js'
    },
    plugins: [
        new ExtractTextPlugin("./css/out.css"),
    ]
};
