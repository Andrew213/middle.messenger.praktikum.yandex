module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "eslint:recommended",
    // Базовые правила для TypeScript
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["@typescript-eslint"],

  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        tmpl: "never",
      },
    ],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "import/no-extraneous-dependencies": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "max-classes-per-file": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "no-unused-expressions": "warn",
    "no-return-assign": "off",
    "no-restricted-syntax": "off",
  },
};
