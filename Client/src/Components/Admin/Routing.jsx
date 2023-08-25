import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './Admin_Dashboard/Admindashboard';

function Admin() {
    return (
        <Router>
            <Routes>
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </Router>
    );
}

export default Admin;
