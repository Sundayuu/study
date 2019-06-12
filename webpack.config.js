const path = require('path')
module.exports = {
  // 入口文件
  entry: './src/index.js',
  //出口文件
  // path.resolve 方法将路径或路径片段的序列解析为绝对路径。
  // __dirname表示当前执行脚本所在的目录
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'temp/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    // 基本路径
    // contentBase: '/',
    host: '127.0.0.1',
    // 一切服务都启用gzip 压缩
    compress: true,
    port: 9999
  }
}
