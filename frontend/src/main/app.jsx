import React from 'react';
import '../common/template/dependencies';
import Footer from '../common/template/Footer';

import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Routes from './routes';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <Routes />
            </div>
            <Footer />
        </div>
    );
}

export default App;