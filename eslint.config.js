import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    files: ['main.js', 'preload.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        module: 'readonly',
        exports: 'readonly'
      }
    }
  },
  {
    ignores: ['dist/**']
  },
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    },
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
]