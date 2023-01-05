// Componentes
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes/Routes";

// Context
import AuthApi from './AuthApi';

function App() {
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState('');

  const GetCookieSession = ()=>{
    setAuth(true);
    setRole(1);
  }

  useEffect(()=>{
    GetCookieSession();
  });

  return (
    <div className="App vh-100 d-flex">
      <AuthApi.Provider value={{auth, setAuth, role, setRole}}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthApi.Provider>
    </div>
  );
}

export default App;