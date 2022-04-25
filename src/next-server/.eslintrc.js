/* eslint-disable */
module.exports = {
 env: {
  browser: true,
 },
 extends: ["../../.eslintrc.js","plugin:react/recommended"],
 parserOptions: {
  ecmaFeatures: {
   jsx: true,
  },
 },
 plugins: ["react"],
 rules: {
  "react/prop-types": 0,
  "react/react-in-jsx-scope": 0
 },
 settings: {
  react: {
   version: "detect",
  },
 },
};
