import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Private from "./components/Private/Private.component";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import Spinner from "./components/Spinner";

function App() {
  return (
    <BrowserRouter>
      <Spinner />
      <Switch>
        <Private exact path="/">
          <HomePage />
        </Private>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
