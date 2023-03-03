import Sidebar from './components/sidebar/Sidebar';
import Step1 from './components/step1/Step1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <div>
        <Switch>
            <Route exact path="/">
              <Step1/>
            </Route>
        </Switch></div>
      </div>
    </Router>

  );
}

export default App;
