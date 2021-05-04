import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';

import { ResultSearch } from '../search/ResultSearch';
import { SearchContext } from '../search/SearchContext';


export const Navbar = () => {
   
    //const [newHeroes, setNewHeroes] = useState([])
    const { user } = useContext(AuthContext)
   // const {newHeroes, setNewHeroes} = useContext(SearchContext)
    
    return (
        <>
         
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
            </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel"
                        >
                            Marvel
                    </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/dc"
                        >
                            DC
                    </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Buscar
                    </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <ResultSearch/>
                        <span className="ml-3 text-info">
                            {user.name}
                        </span>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/login"
                        >
                            Logout
                    </NavLink>
                    </ul>
                </div>
            </nav>
        
            {/*  {

                (newHeroes.length > 0)

                &&
                < div className="container mt-2">
                    <HeroeList publisher={''} newHeroes={newHeroes} />
                </div>


            } */}
        </>
    )
}