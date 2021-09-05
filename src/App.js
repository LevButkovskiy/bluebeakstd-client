import React from "react";
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from "./components/theme/globalStyles";
import { lightTheme, darkTheme } from "./components/theme/themes";
import { useDarkMode } from './components/theme/useDarkMode';

import Menu from './components/Menu';
import Content from "./components/Content";

const AppComponent = styled.div `
  display: flex;
  flex-direction: row;

  background: ${(props) => props.theme.background};
`;

function App() {
    return (
        <ThemeProvider theme={useDarkMode().isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <AppComponent>
                <Menu></Menu>
                <Content></Content>
            </AppComponent>
        </ThemeProvider>

  );
}

export default App;
