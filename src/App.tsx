import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Pages from "./pages";

function App() {
  return (
    <div className="App mx-0">
      <Router>
        <Switch>
          <Route component={Pages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
