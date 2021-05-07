import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainComponent } from './MainComponent';
import { LoginComponent } from './LoginComponent';
import { Layout } from './Layout';
class App extends Component {
  render() {
    return (
        <Router>
                  <Layout>

          <Switch>
            <Route path="/" exact component={MainComponent}/>
            <Route path="/login" exact component={LoginComponent}/>
          </Switch>
          </Layout>

        </Router>
    );
  }
}

export default App;
