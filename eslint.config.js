import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: ['readline-sync/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
  },
];