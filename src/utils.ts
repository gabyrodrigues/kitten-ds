import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const CUSTOM_TW_MERGE = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": [
				"text-display1",
				"text-display2",
				"text-display3",
				"text-h1",
				"text-h2",
				"text-h3",
				"text-h4",
				"text-h5",
				"text-h6",
				"text-body1",
				"text-body2",
				"text-body3",
				"text-body4",
				"text-body5",
			],
		},
	},
	override: {
		conflictingClassGroups: {
			"font-size": [],
		},
	},
});

export function cn(...inputs: ClassValue[]) {
	return CUSTOM_TW_MERGE(clsx(inputs));
}
