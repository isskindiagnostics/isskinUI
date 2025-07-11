// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import regexpPlugin from "eslint-plugin-regexp";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  [
    globalIgnores(["dist", "storybook-static"]),
    {
      files: ["**/*.{ts,tsx}"],
      plugins: {
        "simple-import-sort": simpleImportSort,
        regexp: regexpPlugin,
        "jsx-a11y": jsxA11y,
      },
      rules: {
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
      },
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
    },
  ],
  storybook.configs["flat/recommended"],
);
