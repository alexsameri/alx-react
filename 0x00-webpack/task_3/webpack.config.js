const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
// const { mode, entry, output } = require('../task_2/webpack.config');

module.exports = {
    mode: 'development', // use production for actual deployment or final builds
    entry: {
        header: './js/header/header.js',
        body: './js/body/body.js',
        footer: './js/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: './public', //serve file from this directory
        port: 8564,
        open: true, // auto-open browser
        hot:true // enable hot module replacement
    },
    module: {
        rules: [
            // css loader and style loader
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        // Image loader configuration
        {
            test: /\.(jpg|jpeg|png|gif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // Inline images less than 8KB
                        name: '[name].[hash].[ext]', // naming pattern for the output
                        outputpath: 'images', // output images to an images folder
                    }, 
                },
            'image-webpack-loader', // optimizes images
            ],
        },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: ({htmlWebpackPlugin}) => `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>ALX Dashboard</title>
                </head>
                <body>
                    <div id="header"></div>
                    <div id="body"></div>
                    <div id="footer"></div>
                    
                    <script src="header.bundle.js"></script>
                    <script src="body.bundle.js"></script>
                    <script src="footer.bundle.js"></script>
                </body>
            </html>
            `,
        }),
    ],
};