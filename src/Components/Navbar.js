import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div >
            <nav className='nav-wrapper red darken-3'>
                <div className="container">
                    <a href='/' className="brand-logo"> Do Something</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(Navbar);
