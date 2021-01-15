import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import GreetingPage from './GreetingPage';
import TodoPage from './TodoPage';
import './Navbar.css';

const App = () => {
  return (
    <div>
      <Navbar expand="lg" style={{fontFamily: 'Literata'}}>
        <Navbar.Brand>My Personal Assistant</Navbar.Brand>
        <Nav>
          <Link to="/todo">To-dos</Link>
          <Link to="/">Home</Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={GreetingPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;