import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  prettier, // ปิดกฎที่ขัดแย้งกับ Prettier
  prettierPlugin, // เปิดใช้ Prettier เป็น ESLint rule
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly"
      }
    },
    rules: {
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "linebreak-style": 0,
      "no-console": "off",
      "prettier/prettier": "error" // บังคับใช้ Prettier ผ่าน ESLint
    }
  }
];