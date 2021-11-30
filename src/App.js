import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import GlobalStyle from "./globalStyle";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>

      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;
