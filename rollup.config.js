import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import copy from "rollup-plugin-copy"
import { dts } from "rollup-plugin-dts"

const EXTERNAL_PACKAGES = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "clsx",
  "@sunne-team/shared",
  "tailwind-merge",
  "tailwind-variants"
]

const CJS_MJS_N_STYLES = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/index.cjs",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/esm/index.mjs",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["./src/stories/**", "./src/**/*.stories.ts"]
    }),
    copy({
      targets: [
        {
          src: "./src/*.css",
          dest: "dist/"
        }
      ]
    })
  ],
  external: (id) =>
    EXTERNAL_PACKAGES.includes(id) ||
    EXTERNAL_PACKAGES.some((pkg) => id.startsWith(`${pkg}/`)) ||
    /\.css$/.test(id)
}

const TYPES = {
  input: "src/index.ts",
  output: [
    {
      dir: "./dist/types/",
      format: "es",
      preserveModules: true,
      sourcemap: true,
      preserveModulesRoot: "src",
      entryFileNames: (chunkInfo) => {
        if (chunkInfo.name.includes("node_modules"))
          return `${chunkInfo.name.replace("node_modules", "external")}.d.ts`
        return "[name].d.ts"
      }
    }
  ],
  plugins: [dts()],
  external: [/\.css$/]
}

export default [CJS_MJS_N_STYLES, TYPES]
