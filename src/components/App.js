import React, {useState} from 'react'
import Home from '../components/pages/Home';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import LightTheme from '../themes/light'
import DarkTheme from '../themes/dark';
import { Header } from './common';

const GlobalStyle = createGlobalStyle`
body {
  background: ${p => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${p => p.theme.bodyFontColor};
}
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return ( 
    <ThemeProvider theme={{...theme, setTheme: ()=> {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
    }}}>
      <GlobalStyle/>
      <Header clicked={(value)=> value ? setTheme(DarkTheme) : setTheme(LightTheme)}/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
