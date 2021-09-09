import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Notes from "./pages/Notes.jsx";
import Reminders from "./pages/Reminders.jsx";
import Label from "./pages/Label.jsx";
import Archive from "./pages/Archive.jsx";
import Trash from "./pages/Trash.jsx";
import Layout from "./components/Layout";

/*custom theme*/
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  shadows: ["none"],
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route exact path="/notes">
              <Notes />
            </Route>
            <Route path="/reminders">
              <Reminders />
            </Route>
            <Route path="/label">
              <Label />
            </Route>
            <Route path="/archive">
              <Archive />
            </Route>
            <Route path="/trash">
              <Trash />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
