module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    curly: ['error', 'all'],
    // 使われていない変数にエラーを出す
    '@typescript-eslint/no-unused-vars': 'error',
    // 変数などを宣言する前に記述するとエラーを出す
    '@typescript-eslint/no-use-before-define': ['error'],
    // 関数コンポーネント宣言時にアロー関数の形以外はエラーを出す
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    // propsのスプレッド構文での展開を許可する
    'react/jsx-props-no-spreading': 'off',
    // メモ化など行った際、デバッグ表示用の名前を求められるリントをオフにする
    'react/display-name': 'off',
  },
};
