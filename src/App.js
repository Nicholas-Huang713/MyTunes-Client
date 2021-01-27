import React, {useState, useMemo, useEffect} from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import { UserContext, UserDataContext } from './helpers/UserContext';

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const userValue = useMemo(() => ({user, setUser}), [user, setUser]);
  const userDataValue = useMemo(() => ({userData, setUserData}), [userData, setUserData]);
  
  useEffect(() => {
    const loggedUser = localStorage.getItem('token');
    console.log(loggedUser);
    if(loggedUser) {
      setUser(loggedUser)
    }
  }, [])

  return (
    <>
    <Router>
      <UserContext.Provider value={userValue}>
        <UserDataContext.Provider value={userDataValue}>
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
        </UserDataContext.Provider>
      </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
