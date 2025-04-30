import type { Preview } from "@storybook/react";
import "../src/styles.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			sort: "alpha",
		},
		docs: {
			controls: {
				sort: "alpha",
			},
		},
	},
	tags: ["autodocs"],
};

export default preview;
