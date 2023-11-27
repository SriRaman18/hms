import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routers";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import ResponsiveDrawer from "./components/layout";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ResponsiveDrawer />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
