import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { playwright } from "@vitest/browser-playwright";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
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
      ],
    },
    projects: [
      {
        resolve: {
          alias: {
            "@utils": path.resolve(dirname, "src/utils.ts")
          }
        },
        // unit project
        test: {
          name: "unit",
          environment: "jsdom",
          globals: true,
          setupFiles: ["./tests/setup.ts"],
          include: [
            "tests/**/*.test.{ts,tsx}",
            "src/**/*.test.{ts,tsx}",
          ],
        },
      },

      // storybook project
      {
        extends: true,
        resolve: {
          alias: {
            "@utils": path.resolve(dirname, "src/utils.ts")
          }
        },
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
            storybookScript: "pnpm storybook --no-open",
          }),
        ],
        test: {
          name: "storybook",
          setupFiles: ["./.storybook/vitest.setup.ts"],
          pool: "browser",
          browser: {
            enabled: true,
            provider: playwright({}),
            headless: true,
            instances: [{ browser: "chromium" }],
          }
        }
      },
    ],
  }
});