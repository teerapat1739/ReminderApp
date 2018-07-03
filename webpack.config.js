const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }, // ตรงส่วน output เป็นส่วนที่เราเก็บ ไฟล์ที่  compile ว่าไปที่ path ไหน ให้ชื่อว่าอะไร
  //อย่างใน code นี้ก็ ไปที่ path public ชื่อ ไฟล์ bundle
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
      //exclude คือ ไม่ต้อง compile สิ่งที่อยู่ ใน node_module
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },// ส่วนของ module คือ ส่วนที่เราเรียกตัวช่วย ว่า ถ้าเป็น JS ให้ใช้ ิbabel นะ
  // ถ้า เป็น css หรือ scss ก็ใช้ 'style-loader', 'css-loader', 'sass-loader'
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback:{
      index:'index.html'
  },// ไว้อ้างอิงในตอน react router ครับ
  }
};
