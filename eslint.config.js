// eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended, // ใช้ rule ที่แนะนำโดย ESLint
  prettier, // ปิดกฎที่ขัดแย้งกับ Prettier
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly" // แจ้งว่า console ใช้ได้
      }
    }
  },
  {
    plugins: {
      prettier: prettierPlugin
    },

    rules: {
      "prettier/prettier": "error", // ทำให้ ESLint ใช้ Prettier
      quotes: ["error", "double"],
      indent: ["error", 2],
      "linebreak-style": 0,
      "no-console": "off"
    }
  }
];
