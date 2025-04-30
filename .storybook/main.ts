import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: [
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../src/stories/docs/**/*.mdx",
	],
	addons: [
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/experimental-addon-test",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {},
};
export default config;
