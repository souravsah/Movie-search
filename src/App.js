import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import GlobalStyle from "./globalStyle";
import SearchPage from "./pages/SearchPage/SearchPage"
import HomePage from "./pages/HomePage/HomePage";
import { MoviedataProvider } from "./Context/Moviedata";
function App() {
  return (
    <>
    <MoviedataProvider>
    <GlobalStyle/>
    <Router>

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/search" component={SearchPage}/>
      </Switch>
    </Router>

    </MoviedataProvider>

    </>
  );
}

export default App;
