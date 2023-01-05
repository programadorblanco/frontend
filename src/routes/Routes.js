// Librerias
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Componentes publicos
import Login from '../views/public/Login';

// Componentes del usuario anonimo
import HomeAnonymus from '../views/anonymus/Home';
import Ubication from '../views/anonymus/Ubication';

// Componentes del usuario existente
import HomeUserExists from '../views/userExists/Home';

// Componentes de rutas
import { PublicRoute } from './PublicRoutes';
import { PrivateRouteAnonymus } from './PrivateRouteAnonymus';
import { PrivateRouteUserExists } from './PrivateRouteUserExists';

// Todas las rutas
import { publicRoutes } from "./AllRoutes";
import { anonymous } from "./AllRoutes";
import { userExist } from "./AllRoutes";

// Context
import AuthApi from '../AuthApi';

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
        {/* RUTAS PUBLICAS */}
        <PublicRoute exact path={publicRoutes.login} component={Login} auth={Auth.auth} role={Auth.role}/>

        {/* RUTAS PARA ANONIMOS */}
        <PrivateRouteAnonymus exact path={anonymous.home} component={HomeAnonymus} auth={Auth.auth} role={Auth.role}/>
        <PrivateRouteAnonymus exact path={anonymous.ubication} component={Ubication} auth={Auth.auth} role={Auth.role}/>

        {/* RUTAS PARA USUARIOS EXISTENTES */}
        <PrivateRouteUserExists exact path={userExist.home} component={HomeUserExists} auth={Auth.auth} role={Auth.role}/>

        {/* PAGINA NOT FOUND ERROR 404 */}
        {/* <Route path="*" component={NotFound}/> */}
    </Switch>
  );
};

export default Routes;