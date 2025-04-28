const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js', // Entry file for JavaScript
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output directory for bundled files
    },
    module: {
    rules: [
      // CSS loader and style loader
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
              limit: 8192, // Inline images smaller than 8KB
              name: '[name].[hash].[ext]', // Naming pattern for the output image files
              outputPath: 'images', // Output images to an 'images' folder in the build directory
            },
            },
          'image-webpack-loader', // Optimizes images
        ],
        },
    ],
    },
};
