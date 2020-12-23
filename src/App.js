import React, {useState} from 'react'
import Home from './pages/Home';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import LightTheme from './themes/light'
import DarkTheme from './themes/dark';
import { Header } from './components/common';

const GlobalStyle = createGlobalStyle`
body {
  background: ${p => p.theme.bodyBackgroundColor};
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
