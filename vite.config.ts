import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig(({ command }) => {
  if (command === "serve") {
    // Dev config
    return {
      plugins: [react(), tailwindcss()],
      root: path.resolve(__dirname, "dev"),
      build: {
        // biome-ignore lint/style/useNamingConvention: lib custom property
        outDir: path.resolve(__dirname, "dist")
      },
      test: {
        include: ["tests/**/*.test.ts"],
        exclude: ["tests/build/**"]
      }
    }
  }
  // Build config
  return {
    plugins: [react(), dts(), tailwindcss()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "Kitten-DS",
        // biome-ignore lint/style/useNamingConvention: lib custom property
        fileName: "Kitten-DS"
      },
      // biome-ignore lint/style/useNamingConvention: lib custom property
      rollupOptions: {
        external: ["react", "react-dom", "clsx", "tailwind-merge"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            clsx: "clsx",
            "tailwind-merge": "tailwindMerge"
          }
        }
      }
    },
    test: {
      include: ["tests/**/*.test.ts"],
      exclude: ["tests/build/**"]
    }
  }
})
