import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(({ command, mode }) => {
	if (command === "serve") {
		// Dev config
		return {
			plugins: [react()],
			root: path.resolve(__dirname, "dev"),
			build: {
				outDir: path.resolve(__dirname, "dist"),
			},
		};
	}
	// Build config
	return {
		plugins: [react(), dts()],
		build: {
			lib: {
				entry: path.resolve(__dirname, "src/index.ts"),
				name: "Kitten-DS",
				fileName: "Kitten-DS",
			},
			rollupOptions: {
				external: ["react", "react-dom"],
				output: {
					globals: {
						react: "React",
						"react-dom": "ReactDOM",
					},
				},
			},
		},
	};
});
