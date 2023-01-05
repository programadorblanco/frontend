// Librerias
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Componentes
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AnyReactComponent = ({ text }) => <FontAwesomeIcon icon="location-dot" className='color-danger point' />;

const Ubication = () => {
    const defaultProps = {
        center: {
            lat: 32.4968847,
            lng: -117.0178467
        },
        zoom: 11
    };

    const [coordenadas, setCoordenadas] = useState({
        lat: null,
        lng: null
    });

    const options = {
        enableHighAccuracy: true,
        maximumAge: 50000,
        timeout: 100000
      };

      function error() {
        alert('No hay posición disponible.');
      }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) =>{
            const crd = pos.coords;
            setCoordenadas({
                lat: crd.latitude,
                lng: crd.longitude
            })
        }, error, options);
    })
    return (
        <React.Fragment>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content" className='m-3'>
                    <Header />
                    <div className="container-fluid bg-white h-content mt-3 rounded">
                        {
                            coordenadas.lat == null ?
                                (
                                    <div className='persmisos'>Cargando, acepte los permisos</div>
                                ) :
                                (
                                    <div style={{ height: '100vh', width: '100%' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: "" }}
                                            defaultCenter={defaultProps.center}
                                            defaultZoom={defaultProps.zoom}
                                        >
                                            <AnyReactComponent
                                                lat={coordenadas.lat}
                                                lng={coordenadas.lng}
                                                text="My Marker"
                                            />
                                        </GoogleMapReact>
                                    </div>
                                )
                        }

                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Ubication;