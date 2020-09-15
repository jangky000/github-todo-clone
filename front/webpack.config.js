// npx webpack --entry ./source/index.js --output ./public/index_bundle.js
// npx webpack --config webpack.config.js 또는 그냥 npx webpack
// entry 2개 이상 설정 가능한 기능도 있다.
// plugin 사용 시 chunks 옵션도 있다.
// npx webpack --watch -> 파일이 변경될 때마다 실행

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:"./source/index.js",
    output:{
        path: path.resolve(__dirname, "public"),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./source/index.html',
            filename: './index.html'
        })
    ]
}


