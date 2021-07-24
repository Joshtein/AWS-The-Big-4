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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/calculator" component={Calculator} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
