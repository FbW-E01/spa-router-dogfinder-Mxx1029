
import React from 'react';
import './App.css';
import Dogs from './pages/Dogs.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1 className="heading">Helloz. We have dogz. Click on them for more info.</h1>

      <Switch>
        <Route path="/dogs" component={Dogs} />
        <Route path="/">
          <Redirect to="/dogs" />
        </Route>
        <Route path="*">
          <Redirect to="/dogs" />
        </Route>
      </Switch>

    </div>
  );
}


export default App;

/* Joel's solution:

function Whiskey() {
  return (
    <div>
      <h2>Whiskey</h2>
    </div>
  )
}

function Hazel() { ... }

function Tubby() { ... }

function App() {

  return (
    <div>
      <h1>We have dogz...</h1>

    <nav>
      <ul>
      // instead of activeClassName="currentdog", you can also leave it blank and just do .active img{} in CSS
        <li><NavLink to="/dogs/whiskey" activeClassName="currentdog"><img src={whiskey} />Whiskey</NavLink></li>
        ...
        ...
      </ul>
    </nav>

    <div>
      <Switch>
        <Route path="/dogs/whiskey" component={Whiskey} />
        ...
        ...
        <Route path="/dogs" render={ () => { return "Click an image" }} />
        <Route path="/*" render={ () => { return <Redirect to="/dogs" /> }} />
      </Switch>
    </div>

  </div>

  );

}


*/