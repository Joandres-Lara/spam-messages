/* eslint-disable */
module.exports = {
 root: true,
 env: {
  es2021: true,
 },
 extends: [
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
 ],
 parser: "@typescript-eslint/parser",
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 plugins: ["@typescript-eslint"],
 rules: {
  indent: ["error", 1],
  "linebreak-style": ["error", "unix"],
  quotes: ["error", "double"],
  semi: ["error", "always"],
 }
};
