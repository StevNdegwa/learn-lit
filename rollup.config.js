import { defineConfig } from "rollup";
import serve from "rollup-plugin-serve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import liveReload from "rollup-plugin-livereload";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const extensions = [".js"];

export default defineConfig({
  input: "./src/main.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: /node_modules/,
      extensions,
      presets: ["@babel/preset-env"],
    }),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    serve({
      open: true,
      contentBase: "dist",
      host: "localhost",
      port: "3300",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    }),
    liveReload(),
    copy({
      targets: [{ src: ["public/*"], dest: "dist" }],
    }),
  ],
});
