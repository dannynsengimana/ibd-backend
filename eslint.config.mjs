// eslint.config.mjs
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly',  // Apply console globally
        process: 'readonly',  // Make 'process' available globally for backend files
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    files: ['*.test.js'],  // Limit to test files
    languageOptions: {
      globals: {
        expect: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',  // Add 'it' to Jest globals
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
];
