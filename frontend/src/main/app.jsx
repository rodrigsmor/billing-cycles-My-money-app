import React from 'react';
import '../common/template/dependencies';

import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
        </div>
    );
}

export default App;