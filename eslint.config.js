import pluginVue from 'eslint-plugin-vue';

import globals from 'globals';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    prettierConfig,
    {
        languageOptions: {
            globals: {
                ...globals.esnext,
                ...globals.browser,
                ...globals.commonjs,
                ...globals.node,
            },
        },
        rules: {
            'vue/require-prop-types': 0,
            'no-inner-declarations': 0,
            'no-constant-condition': 0,
            'no-unused-vars': 1,
            'no-console': 1,
            'no-empty': 1,
            'semi': 1,

            'max-len': [
                'warn',
                {
                    code: 80,
                },
            ],
        },
    },
];
