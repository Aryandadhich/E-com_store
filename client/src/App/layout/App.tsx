import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
// Assuming this is where the Product interface is defined

function App() {
   //theme light/dark
   const [darkMode , setDarkMode] = useState(false);
   const paletteType = darkMode ? 'dark' : 'light';
   const theme = createTheme({
    palette:{
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? "eaeaea" : '#121212'
      }
    }
   })

   function handleThemeChange() {
         setDarkMode(!darkMode); 
   }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header darkmode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container >
      <Outlet/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
