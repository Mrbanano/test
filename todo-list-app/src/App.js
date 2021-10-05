import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Moderator from './components/Moderator';
import Admin from './components/Admin';
import LoginForm from './components/LoginForm';

import clienteAxios from './config/axios';

const AppContext = React.createContext();

function App() {
  const [role, setrole] = useState('moderator');
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{}}>
      <div className="App">
        <div className="App-container ">
          <div className="App-content">
            <Header />
            {!user ? (
              <LoginForm />
            ) : role === 'admin' ? (
              <Admin />
            ) : (
              <Moderator />
            )}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
