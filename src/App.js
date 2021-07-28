import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from './redux/store'
import SignUp from './windows/SignUp';
import LogIn from './windows/LogIn';
import DeployAPI from './windows/TestAPI';
import { Provider } from 'react-redux'
import Landing from "./components/landing/Landing"
import Calculator from "./components/Calculate/Calculate"
import Universities from './components/universities/Universities';
import Majors from './components/majors/Majors';
import Recommendation from './components/recommendation/Recommendation';
import StudentDashboard from './components/studentDashboard/StudentDashboard';
import UniversityDashboard from './components/universityDashboard/UniversityDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/student-dashboard" component={StudentDashboard} />
            <Route exact path="/university-dashboard" component={UniversityDashboard} />
            <Route exact path="/universities" component={Universities} />
            <Route exact path="/majors" component={Majors} />
            <Route exact path="/recommendation" component={Recommendation} />
            
            <Route exact path="/calculator" component={Calculator} />
            {/* <Route exact path="/result" component={ResultCalculator} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
