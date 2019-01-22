const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : "basic-setup-bundler.js"
    },
    mode : "development",
    module :{
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    plugins : [new HtmlWbpackPlugin({
        template : './src/index.html'
    })]
}