import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {
    const {user:{name}, dispatch} = useContext(AuthContext);
    const history = useHistory();
    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        history.replace('/login');
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>
                <div className="collapse navbar-collapse mt-1" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/dc"
                            >
                                DC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <span className="nav-link text-info">{name}</span>
                        <button
                            className="btn nav-link navbar-text"
                            onClick={handleLogout}
                        >
                         LogOut
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}