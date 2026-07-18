import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "semi": ["error", "never"],
      "quotes": ["error", "double"]
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "prisma/generated/**",
    "prisma/app/generated/**",
    "prisma/migrations/**",
    "app/generated/**",
    "node_modules/**",
    "public/**",
    "coverage/**",
    "dist/**",
    // Additional ignores:
    ".eslintrc.js",
    ".eslintrc.cjs",
    ".eslintrc.mjs",
  ]),
])

export default eslintConfig
