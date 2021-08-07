import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

import {
  Container,
} from "@material-ui/core";

import Sidebar from './components/Sidebar';
import Header from './components/Header'
import Home from './pages/Home'
import Feed from './pages/Feed';
import Users from './pages/Users';
import Price from './pages/Price';

function App() {
  return (
    <div>
    <Router>
      <div style={{ display: 'flex' }}>
      <Sidebar></Sidebar>
      <div className="container">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Container>
              <Home></Home>
            </Container>
          </Route>
          <Route exact path="/feed">
            <Container>
              <Feed/>
            </Container>
          </Route>
          <Route exact path="/users">
            <Container>
              <Users/>
            </Container>
          </Route>
          <Route exact path="/price">
            <Container>
              <Price/>
            </Container>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
