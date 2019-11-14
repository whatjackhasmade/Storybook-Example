import { addDecorator, configure } from "@storybook/react";
import GlobalStyle from "../assets/style.css";

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);

addDecorator(s => (
	<>
		<GlobalStyle />
		{s()}
	</>
));
