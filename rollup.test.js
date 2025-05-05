import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import copy from "rollup-plugin-copy"
import dts from "rollup-plugin-dts"

const CJS_MJS_N_STYLES = {
  input: "src/index.ts",
  output: [
    {
      file: "tests/build/cjs/index.cjs",
      format: "cjs",
      sourcemap: true,
      // biome-ignore lint/style/useNamingConvention: lib custom property
      entryFileNames: (chunk_info) => {
        if (chunk_info.name.includes("node_modules"))
          return `${chunk_info.name.replace("node_modules", "external")}.cjs`
        return "[name].cjs"
      }
    },
    {
      file: "tests/build/esm/index.mjs",
      format: "esm",
      sourcemap: true,
      // biome-ignore lint/style/useNamingConvention: lib custom property
      entryFileNames: (chunk_info) => {
        if (chunk_info.name.includes("node_modules"))
          return `${chunk_info.name.replace("node_modules", "external")}.mjs`
        return "[name].mjs"
      }
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
          dest: "tests/build/"
        }
      ]
    })
  ],
  external: ["react", "react-dom", "clsx", "tailwind-merge"]
}

const TYPES = {
  input: "src/index.ts",
  output: [
    {
      dir: "./tests/build/types/",
      format: "es",
      // biome-ignore lint/style/useNamingConvention: lib custom property
      preserveModules: true,
      sourcemap: true,
      // biome-ignore lint/style/useNamingConvention: lib custom property
      preserveModulesRoot: "src",
      // biome-ignore lint/style/useNamingConvention: lib custom property
      entryFileNames: (chunk_info) => {
        if (chunk_info.name.includes("node_modules"))
          return `${chunk_info.name.replace("node_modules", "external")}.d.ts`
        return "[name].d.ts"
      }
    }
  ],
  plugins: [
    dts.default(),
    typescript({
      tsconfig: "./tsconfig.types.json",
      exclude: ["./src/stories/**", "./src/**/*.stories.ts"]
    })
  ],
  external: [/\.css$/]
}

export default [CJS_MJS_N_STYLES, TYPES]
