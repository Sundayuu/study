const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 将css与js分离, 这样css bundle 和js bundle平行加载,暂不支持webpack4.0 需要 yarn add --dev extract-text-webpack-plugin@next
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // 入口文件
  entry: './src/index.jsx',
  //出口文件
  // path.resolve 方法将路径或路径片段的序列解析为绝对路径。
  // __dirname表示当前执行脚本所在的目录
  output: {
    filename: 'index-[hash].js', // 打包文件名
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'index-[chunkhash].js'
  },
  // devtool: 'source-map',
  // 引入文件省略后缀
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
    // 路径优化
    alias: {
      components: path.resolve(__dirname, './src/components'),
      images: path.resolve(__dirname, './images'),
      utils: path.resolve(__dirname, './utils')
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
        //图片loader
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader' //根据文件地址加载文件
          }
        ]
      },
      {
        // url-loader,将小于上限值的文件,解析成base64打包,大于limit值的还是需要file-loader支持
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].style.css'),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      hash: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'initial',
          filename: '[name].[chunkhash].js'
        }
      }
    }
  },
  devServer: {
    // 基本路径
    host: '127.0.0.1',
    // 一切服务都启用gzip 压缩
    compress: true,
    port: 9999,
    hot: true
  }
}
