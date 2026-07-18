import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ["tests/api/**/*.test.ts"],
    fileParallelism: false,
    setupFiles: ["tests/helpers/setup.ts"],
  },
})
