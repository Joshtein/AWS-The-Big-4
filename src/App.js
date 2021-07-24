//import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import SignUp from './windows/SignUp';
import LogIn from './windows/LogIn';
import DeployAPI from './windows/TestAPI';
import { Provider } from 'react-redux'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Provider store={store}>
      <div>
        {/* <LogIn /> */}
        <DeployAPI />
      </div>
    </Provider>
    //<SignUp />
  );
}

export default App;
