import { exec } from "node:child_process"
import { promises as fs } from "node:fs"
import { join } from "node:path"
import { promisify } from "node:util"
import { beforeAll, describe, expect, it } from "vitest"

const exec_promise = promisify(exec)

describe("Rollup Build", () => {
  const cjs_dir = join(__dirname, "build/cjs")
  const esm_dir = join(__dirname, "build/esm")
  const types_file = join(__dirname, "build/types/index.d.ts")
  const css_file = join(__dirname, "build/styles.css")

  beforeAll(async () => {
    try {
      const { stdout } = await exec_promise("pnpm run build:test")
      // biome-ignore lint/suspicious/noConsoleLog: testing build print
      console.log(`stdout: ${stdout}`)
    } catch (error) {
      console.error(`exec error: ${error}`)
      throw error
    }
  }, 30000)

  it("should create CommonJS files", async () => {
    const files = await fs.readdir(cjs_dir)
    expect(files).toContain("index.cjs")
    expect(files).toContain("index.cjs.map")
  })

  it("should create ESM files", async () => {
    const files = await fs.readdir(esm_dir)
    expect(files).toContain("index.mjs")
    expect(files).toContain("index.mjs.map")
  })

  it("should create TypeScript declaration file", async () => {
    try {
      await fs.access(types_file)
      expect(true).toBe(true)
    } catch (error) {
      expect(error).toBeNull()
    }
  })

  it("should create styles files", async () => {
    try {
      await fs.access(css_file)
      expect(true).toBe(true)
    } catch (error) {
      expect(error).toBeNull()
    }
  })
})
