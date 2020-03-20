const path = require( 'path' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )


module.exports = {
    mode: 'development',
    entry: ['./src/index.jsx'],
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'app.js',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        port: 9000
    },
    devtool: 'source-map',
    plugins: [new MiniCssExtractPlugin({filename: 'style.css'})],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'standard-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            { test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        /*outputPath: '/public'*/
                      }
                    }
                  ]
            },
            {
                test:/\.(|svg|png|jpg|gif)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx' ]
    }
}