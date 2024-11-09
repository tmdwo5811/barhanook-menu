const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx"], // 사용하려는 파일 확장자 지정
      fix: true, // 자동 수정 기능 활성화
    }),
  ],
};
