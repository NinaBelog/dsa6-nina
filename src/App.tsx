import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder } from "./lib/placeholder";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Button, ButtonLink, ButtonIcon, ButtonGroup } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme= { switcher ? lightTheme: darkTheme} >
			<GlobalStyle />
			<main>
				<Button iconBefore="sample" size="base" appearance="primary" text ="hello dsa" iconAfter="filter"/>
				<Button size="base" appearance="primary" text ="hello dsa"/>
				<Button size="base" appearance="secondary" text ="hello dsa"/>
				<Button iconBefore="sample" size="small" appearance="primary" text ="hello dsa" iconAfter="filter"/>
				<Button size="small"disabled appearance="secondary" text ="hello dsa"/>
				<ButtonLink iconBefore="sample" size="base" appearance="primary" text ="I'm button" iconAfter="filter"/>
				<ButtonIcon icon="sample" size="base" appearance="primary"/>
				<Card />
			</main>
		</ThemeProvider>
	);
}
export default App;
