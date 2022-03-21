import React from 'react';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import Footer from '../common/template/Footer';

import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Messages from '../common/messages/messages';
import Routes from './routes';

const App = (props) => {
    return (
        <HashRouter>
            <div className="wrapper">
                <Header />
                <Sidebar />
                <Routes />
                <Footer />
                <Messages />
            </div>
        </HashRouter>
    );
}

export default App;