export default [
    {
      ignores: ['node_modules/**', 'package.json', 'package-lock.json', 'coverage/**', '.github/workflows/**', '__fixtures__',
        '__tests__'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always'],
        indent: ['error', 2],
        'no-multi-spaces': 'error',
        'eol-last': ['error', 'always'],
        'no-var': 'error',
        'prefer-const': 'error',
        'no-unused-vars': 'error',
        eqeqeq: ['error', 'always'],
        'no-implicit-globals': 'error',
        curly: ['error', 'all'],
      },
    },
  ];