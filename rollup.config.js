import babel from "rollup-plugin-babel";
import postLess from "rollup-plugin-less";
// import postCss from "rollup-plugin-postcss";

// rollup.config.js
export default {
  // 核心选项
  input: "./src/index.js", // 必须
  external: ["react", "antd", "omit.js"], // 外部依赖的包
  plugins: [
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
    postLess({
      extensions: [".less"],
    }),
    // postCss({
    //   extensions: [".css"],
    // }),
  ],

  // 额外选项
  // onwarn,

  // danger zone
  // acorn,
  // context,
  // moduleContext,
  // legacy

  output: {
    // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file: "./lib/bundle.js", // 必须
    format: "cjs", // 必须
    // name,
    // globals,

    // 额外选项
    // paths,
    // banner,
    // footer,
    // intro,
    // outro,
    // sourcemap,
    // sourcemapFile,
    // interop,

    // 高危选项

    // exports,
    // amd,
    // indent
  },
};
