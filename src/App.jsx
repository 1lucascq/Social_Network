import React from "react";
import SignUp from "./pages/SignUp";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#DDDDDD"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
