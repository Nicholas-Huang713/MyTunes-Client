import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <PrivateRoute>
            <Route path="/dashboard" component={Dashboard} />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Router>
    </>
  );
}

export default App;
