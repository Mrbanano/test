import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Moderator from './components/Moderator';
import Admin from './components/Admin';
import LoginForm from './components/LoginForm';

function App() {
  const [role, setrole] = useState('admin');
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <div className="App-container ">
        <div className="App-content">
          <Header />
          {!user ? <LoginForm /> : role === 'admin' ? <Admin /> : <Moderator />}
        </div>
      </div>
    </div>
  );
}

export default App;
