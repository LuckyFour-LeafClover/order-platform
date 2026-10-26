import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        // 钉死 tsconfig 查找根目录，消除批量 lint 时“多候选 tsconfig”歧义
        tsconfigRootDir: import.meta.dirname,
        // 关闭类型感知 lint（根配置下的推荐规则不需要类型信息）
        projectService: false,
        project: false,
      },
    },
    ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
  }
);
