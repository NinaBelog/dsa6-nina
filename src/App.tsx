import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder } from "./lib/placeholder";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Button } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme= { switcher ? lightTheme: darkTheme} >
			<GlobalStyle />
			<main>
				<Button appearance="primary" text ="hello dsa"/>
			</main>
		</ThemeProvider>
	);
}
export default App;
