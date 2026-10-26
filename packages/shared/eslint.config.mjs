import tseslint from 'typescript-eslint';

export default tseslint.config({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
      project: "./tsconfig.json"
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
  },
  "scripts": {
  "lint": "eslint . --ext .ts"
}
});