import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly" // ทำให้ ESLint รับรู้ว่า console ถูกต้อง
      }
    },
    rules: {
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "linebreak-style": 0,
      "no-console": "off" // ปิดการแจ้งเตือน console
    }
  }
];
