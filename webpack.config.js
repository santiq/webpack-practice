module.exports = {
  entry: "./src/entry.js",
  output: {
    path: './dist',
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};