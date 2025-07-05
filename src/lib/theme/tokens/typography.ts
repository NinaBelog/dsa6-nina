import { text } from "stream/consumers";
import { spacers } from "./spacers";

export const typography = {
	fontFamily: {
		text: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		heading: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
	},

	fontSize: {
		h1: spacers[32],
		h2: spacers[24],
		h3: spacers[20],
		h4: spacers[16],
		h5: spacers[14],
		h6: spacers[12],
		base: spacers[16],
		small: spacers[14],
		extraSmall: spacers[12],
	},

	lineHeight: {
		h1: spacers[40],
		h2: spacers[32],
		h3: spacers[28],
		h4: spacers[24],
		h5: spacers[18],
		h6: spacers[16],
		base: spacers[24],
		small: spacers[20],
		extraSmall: spacers[16],
	},

	fontWeight: {
		regular: "400",
		medium: "500",
	},
};
