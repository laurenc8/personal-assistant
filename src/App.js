import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
          <Nav.Link href="/todo">To-dos</Nav.Link>
          <Nav.Link href="/">Home</Nav.Link>
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