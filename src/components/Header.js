// Librerias
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, InputGroup, Col, Form } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

// Context
import AuthApi from '../AuthApi';

// Rutas
import { anonymous } from '../routes/AllRoutes';
import { userExist } from '../routes/AllRoutes';
import urlGlobal from '../routes/BaseUrl';

const Header = () => {
    const Auth = React.useContext(AuthApi);

    const [toggleSidebar, setToggleSidebar] = useState(true);

    const handleToggleMenu = () => {
        if (toggleSidebar) {
            setToggleSidebar(false);
            document.querySelector('#sidebar').classList.remove('collapse');
            document.querySelector('#sidebar').classList.add('position-absolute');
        }
        else {
            setToggleSidebar(true);
            document.querySelector('#sidebar').classList.add('collapse');
            document.querySelector('#sidebar').classList.remove('position-absolute');
        }
    }

    return (
        <nav className='nav' id="header">
            <Col className="col-12 col-lg-7 col-xl-8 d-none d-lg-flex">
                <InputGroup className='bg-white px-4 py-1 d-flex align-items-center rounded'>
                    <FontAwesomeIcon icon="search" />
                    <Form.Control
                        type="text"
                        className='border-0'
                        placeholder='Search here'
                    />
                </InputGroup>
            </Col>
            <Col className="col-12 col-md-12 col-lg-5 col-xl-4 d-flex d-lg-block justify-content-end">
                <ul className='d-flex justify-content-end h-100 align-items-center'>
                    <li className='mr-icons-header d-lg-none'>
                        <Dropdown>
                            <Dropdown.Toggle className="bg-transparent border-0 p-0">
                                <FontAwesomeIcon icon="search" className='text-dark' />
                                <span className="badge-danger badge badge-counter invisible ">3+</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-search">
                                <InputGroup className='bg-white px-4 py-1 d-flex align-items-center rounded w-100'>
                                    <FontAwesomeIcon icon="search" />
                                    <Form.Control
                                        type="text"
                                        className='border-0'
                                        placeholder='Search here'
                                    />
                                </InputGroup>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className='mr-icons-header'>
                        <Dropdown>
                            <Dropdown.Toggle className="bg-transparent border-0 p-0">
                                <FontAwesomeIcon icon="message" className='text-dark' />
                                <span className="badge-danger badge badge-counter">3+</span>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </li>
                    <li className='mr-icons-header'>
                        <Dropdown>
                            <Dropdown.Toggle className="bg-transparent border-0 p-0">
                                <FontAwesomeIcon icon="bell" className='text-dark' />
                                <span className="badge-danger badge badge-counter">3+</span>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle className="bg-transparent border-0 p-0 d-flex align-items-center">
                                <div>
                                    {/* <img className="img-profile rounded-circle" src={urlGlobal.url+photo} /> */}
                                </div>
                                <div className='d-flex flex-column align-items-start ml-user'>
                                    <span className="mr-2 d-none d-lg-inline text-dark small"><strong>Usuario anonimo</strong></span>
                                    <span className="mr-2 d-none d-lg-inline text-dark small">Anonimo</span>
                                </div>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </li>
                    <li className="d-lg-none">
                        <button id="sidebarToggleTop" onClick={() => handleToggleMenu()} className="btn btn-link rounded-circle mr-3">
                            <FontAwesomeIcon icon="bars" className='text-dark' />
                        </button>
                    </li>
                </ul>
            </Col>
        </nav>
    );
};

export default Header