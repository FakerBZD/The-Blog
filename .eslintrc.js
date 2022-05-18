module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest", "prettier"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export":"off",

    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  extends: [
    "plugin:import/recommended",
    "airbnb/base",
    "eslint-config-prettier",
  ],
};
