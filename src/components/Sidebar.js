// Librerias
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Rutas
import { anonymous } from "../routes/AllRoutes";
import { userExist } from "../routes/AllRoutes";

// Context
import AuthApi from '../AuthApi';

const Sidebar = () => {
    const Auth = React.useContext(AuthApi);

    return (
        <ul className="sidebar p-3 h-100 shadow collapse d-lg-block" id="sidebar">
            {
                Auth.role === 1 ? (
                    <React.Fragment>
                        <NavLink to={anonymous.home}>
                            {/* <img src={imgLogo} className="logo-sidebar d-none d-lg-block"/> */}
                        </NavLink>
                        <NavLink to={anonymous.home}>
                            {/* <img src={imgLogoSm} className="logo-sidebar d-lg-none"/> */}
                        </NavLink>
                        <NavLink to={anonymous.home} className="item-sidebar p-2 rounded mt-3 d-flex align-items-center flex-column flex-lg-row" activeClassName="active-item-sidebar">
                            <FontAwesomeIcon icon="house"/>
                            <span className="margin-left-icon-text d-none d-lg-block">Inicio</span>
                        </NavLink>
                        <NavLink to={anonymous.ubication} className="item-sidebar p-2 rounded mt-3 d-flex align-items-center flex-column flex-lg-row" activeClassName="active-item-sidebar">
                            <FontAwesomeIcon icon="map"/>
                            <span className="margin-left-icon-text d-none d-lg-block">Ubicacion</span>
                        </NavLink>
                    </React.Fragment>
                ) : Auth.role === 2 ? (
                    <React.Fragment>
                        <NavLink to={userExist.home}>
                            {/* <img src={imgLogo} className="logo-sidebar d-none d-lg-block"/> */}
                        </NavLink>
                        <NavLink to={userExist.home}>
                            {/* <img src={imgLogoSm} className="logo-sidebar d-lg-none"/> */}
                        </NavLink>
                        <NavLink to={userExist.home} className="item-sidebar p-2 rounded mt-3 d-flex align-items-center flex-column flex-lg-row" activeClassName="active-item-sidebar">
                            <FontAwesomeIcon icon="house"/>
                            <span className="margin-left-icon-text d-none d-lg-block">Inicio</span>
                        </NavLink>
                    </React.Fragment>
                ): (
                    <li className="nav-item">
                        <p>Aqui va el logout</p>
                    </li>
                    )
            } 
        </ul>
    );
};

export default Sidebar;