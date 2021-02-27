import Questions from './components/questionspage/Questions';
import QuestionCard from './components/questionspage/QuestionCard';
import Home from './components/homepage/home'
import RulesCard from './components/homepage/RulesCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Congratulations from './components/questionspage/Congratulations';
import Rules from './components/rulespage/Rules'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/play">
            <Questions/>
        </Route>
        <Route path="/rules">
          <Rules />
          </Route>
        <Route path="/anim">
            <Congratulations/>
        </Route>
        <Route path="/card">
            <QuestionCard questiontitle='Try' question="try try" image="https://6jlvz1j5q3.csb.app/undraw_static_assets.svg" ans="A"/>
        </Route>
     </Switch>
     </Router>
  );
}

export default App;
