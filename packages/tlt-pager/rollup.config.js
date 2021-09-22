import { terser } from 'rollup-plugin-terser';

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      plugins: [terser()]
    }
  ]
}