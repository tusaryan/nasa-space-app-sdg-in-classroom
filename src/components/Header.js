import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <h1>NASA Space App: SDGs in Classroom</h1>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/sdgs" className={location.pathname === '/sdgs' ? 'active' : ''}>SDGs</Link>
                <Link to="/lesson-plans" className={location.pathname === '/lesson-plans' ? 'active' : ''}>Lesson Plans</Link>
            </nav>
        </header>
    );
}

export default Header;