import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages';
import SigninPage from './Pages/signin';
import SignupPage from './Pages/signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage}  />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    
    </Router>
  );
}

export default App;
