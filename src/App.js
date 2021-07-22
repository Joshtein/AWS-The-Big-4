//import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import SignUp from './windows/SignUp';
import LogIn from './windows/LogIn';
<<<<<<< HEAD
import DeployAPI from './windows/TestAPI';
=======
>>>>>>> 4c00b231bc3e5e9301b54d6ab480ab3c92128e83
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
        <LogIn />
<<<<<<< HEAD
        {/* <DeployAPI /> */}
=======
>>>>>>> 4c00b231bc3e5e9301b54d6ab480ab3c92128e83
      </div>
    </Provider>
    //<SignUp />
  );
}

export default App;
