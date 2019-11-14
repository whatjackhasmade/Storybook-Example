import React from "react";
import { withKnobs, color, text } from "@storybook/addon-knobs";
import Button from "../components/Button";

const btnColour = {
	label: "Button Colour",
	default: "#9013FE",
	group: "Content"
};

const btnText = {
	label: "Button Text",
	default: "This is a button",
	group: "Content"
};

export default {
	title: "Button",
	decorators: [withKnobs]
};

export const textExample = () => (
	<Button
		colour={color(btnColour.label, btnColour.default, btnColour.group)}
		text={text(btnText.label, btnText.default, btnText.group)}
	/>
);

export const emojiExample = () => (
	<Button colour={color(btnColour.label, btnColour.default, btnColour.group)}>
		<span role="img" aria-label="so cool">
			{text(btnText.label, "😀 😎 👍 💯", btnText.group)}
		</span>
	</Button>
);
