export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'docs',
        'style',
        'test',
        'chore',
        'perf',
        'ci',
        'revert',
      ],
    ],
    'subject-empty': [2, 'never'],
  },
};