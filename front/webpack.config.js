// npx webpack --entry ./source/index.js --output ./public/index_bundle.js
// npx webpack --config webpack.config.js 또는 그냥 npx webpack

const path = require('path');
module.exports = {
    mode:'development',
    enrty:"./source/index.js",
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
                    'css-loader',
                ]
            }
        ]
    }
}


