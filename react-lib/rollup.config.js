import babel from "rollup-plugin-babel";
import postCss from "rollup-plugin-postcss";

// rollup.config.js
export default {
  // 核心选项
  input: "./src/index.js", // 必须
  external: ["react", "antd", "styled-components", "@ant-design/icons", "omit.js"], // 外部依赖的包
  plugins: [
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
    postCss({
      modules: true,
      extensions: [".css", ".less"],
      use: ["less"],
    }),
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
