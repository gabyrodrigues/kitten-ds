import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    // biome-ignore lint/style/useNamingConvention: lib custom property
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
    exclude: ["tests/build/**", "rollup.test.js"],
    coverage: {
      provider: "v8",
      // biome-ignore lint/style/useNamingConvention: lib custom property
      reportsDirectory: "./coverage",
      reporter: ["text", "html"],
      include: ["src/Components/**/*.{ts,tsx}"],
      exclude: [
        "node_modules/",
        "dist/",
        "src/**/index.ts",
        "src/**/index.tsx",
        "**/*.types.ts", // exclude type-only files
        "**/types.ts",
        "src/**/*.test.{ts,tsx}",
        "src/**/*.stories.{ts,tsx}",
        "src/**/__tests__/**",
        "vitest.*.ts"
      ]
    }
  }
})
