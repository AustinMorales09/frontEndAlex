import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">    CINCINNATI</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to='/'>Home</Link>
                    <Link className="nav-item nav-link" to='/about'>About</Link>
                    <Link className="nav-item nav-link" to='/contact'>Contact</Link>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Attractions
                        </button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/attractions">Fun</Link>
                            <Link className="dropdown-item" to="/attractions">History</Link>
                            <Link className="dropdown-item" to="/attractions">Food</Link>
                            <Link className="dropdown-item" to="/attractions">Drinks</Link>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Nav