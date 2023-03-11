import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Step1 from './components/step1/Step1';
import Step2 from './components/step2/Step2';
import Step3 from './components/step3/Step3';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    billing: '',
    addons: [],
  });
  

  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <div>
        <Switch>
            <Route exact path="/">
              <Step1 setFormData={setFormData} />
            </Route>
            <Route exact path="/step2">
              <Step2 setFormData={setFormData} />
            </Route>
            <Route exact path="/step3">
              <Step3/>
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
