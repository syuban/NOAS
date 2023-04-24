import React from 'react';
import Router from "./Router";
import './styles/App.css'
import {ThemeProvider} from "styled-components";
import Theme from "./styles/theme";


function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ThemeProvider theme={Theme}>
            <Router />
        </ThemeProvider>
    </div>
  );
}

export default App;
