import Questions from './components/QuestionsPage/Questions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
            <Home />
        </Route> */}
        <Route path="/play">
            <Questions/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
