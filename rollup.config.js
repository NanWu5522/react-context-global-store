import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'index'
  },
  plugins: [
    babel({
      babelrc: false,
      presets: [['@babel/preset-react']],
    })
  ]
}
