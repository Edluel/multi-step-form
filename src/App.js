import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Step1 from './components/step1/Step1';
import Step2 from './components/step2/Step2';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <div>
        <Switch>
            <Route exact path="/step1">
              <Step1/>
            </Route>
            <Route exact path="/step2">
              <Step2/>
            </Route>
            <Route exact path="/step3">
              <Step1/>
            </Route>
            <Route exact path="/step4">
              <Step1/>
            </Route>
        </Switch></div>
      </div>
    </Router>

  );
}

export default App;
