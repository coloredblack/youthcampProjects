import json from "@rollup/plugin-json";
import { terser } from 'rollup-plugin-terser';

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      plugins:[terser()]
    }
  ],
  plugins: [json()],
  external: ["vue"],
};
