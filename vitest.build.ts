import path from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
    exclude: ["tests/build/**", "rollup.test.js"],
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage",
      reporter: ["text", "html"],
      include: ["src/Components/**/*.{ts,tsx}"],
      exclude: [
        "node_modules/",
        "dist/",
        "src/**/index.ts",
        "src/**/index.tsx",
        "**/*.types.ts",
        "**/types.ts",
        "src/**/*.test.{ts,tsx}",
        "src/**/*.stories.{ts,tsx}",
        "src/**/__tests__/**",
        "vitest.*.ts"
      ]
    }
  },
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils.ts")
    }
  }
})
