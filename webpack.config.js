const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 将css与js分离, 这样css bundle 和js bundle平行加载,暂不支持webpack4.0 需要 yarn add --dev extract-text-webpack-plugin@next

module.exports = {
  mode: 'development',
  // 入口文件
  entry: './src/index.jsx',
  //出口文件
  // path.resolve 方法将路径或路径片段的序列解析为绝对路径。
  // __dirname表示当前执行脚本所在的目录
  output: {
    filename: 'app.js', // 打包文件名
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'temp/'
  },
  // 引入文件省略后缀
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // 路径优化
    alias: {
      components: path.resolve(__dirname, './src/components')
    }
  },
  module: {
    rules: [
      // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: { importLoaders: 1 }
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         plugins: [require('autoprefixer')]
      //       }
      //     },
      //     {
      //       loader: 'less-loader'
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css', // 生成的文件名
      allChunks: true // 抽离其他附加的快里的样式
    })
  ],
  devServer: {
    // 基本路径
    // contentBase:
    host: '127.0.0.1',
    // 一切服务都启用gzip 压缩
    compress: true,
    port: 9999
  }
}
