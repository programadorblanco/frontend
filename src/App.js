// Componentes
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes/Routes";

// Context
import AuthApi from './AuthApi';

// Services
import serviceUser from "./services/user";

function App() {
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState('');

  const GetCookieSession = () => {

    const lala = serviceUser.GetUserById(1)
      .then((response) => {
        let user = response.data;
        // const user = {
        //   Id: 1,
        //   fullName: "Jose Jose",
        //   typeUser: 1
        // }
      })
      .catch((err) => {
        console.log(err)
      });

    const user = {
      Id: 1,
      fullName: "Jose Jose",
      typeUser: 1
    }
    if (!user) {
      setAuth(true);
      setRole(user.typeUser);
    }
    else {
      setAuth(false);
    }
  }

  useEffect(() => {
    GetCookieSession();
  });

  return (
    <div className="App vh-100 d-flex">
      <AuthApi.Provider value={{ auth, setAuth, role, setRole }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthApi.Provider>
    </div>
  );
}

export default App;