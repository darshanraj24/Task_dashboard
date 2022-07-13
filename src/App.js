

import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing';
import Login from './Login';
import Home from './components/Home';
import Tasklist from './Tasklist';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <div className='content'>
        <Switch>

          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/tasklist">
            <Tasklist/>
          </Route>
          <Route path="/edittask:id">
            <Edit/>
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
