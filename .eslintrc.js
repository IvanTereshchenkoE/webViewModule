module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "@react-native-community",
    "prettier/react",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
      ],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
        "react/jsx-curly-brace-presence": [
          2,
          { props: "never", children: "ignore" },
        ],
        "react-hooks/exhaustive-deps": "warn",
        "eol-last": "warn",
        "no-catch-shadow": "off",
        "no-unused-vars": "error",
        semi: "off",
        "@typescript-eslint/semi": ["error"],
      },
    },
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
};
