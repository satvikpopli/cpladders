import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import { light, dark } from './styles/Themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    theme === light ? setTheme(dark) : setTheme(light);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme === light ? 'light' : 'dark'} themeToggler={toggleTheme} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;