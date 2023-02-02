// Librerias
import React from 'react';

// Componentes
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CvView = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content" className='m-3'>
                    <Header />
                    <div className="container-fluid bg-white h-content mt-3 rounded">

                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default CvView;