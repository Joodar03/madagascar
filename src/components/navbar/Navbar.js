import React, {useEffect, useState} from 'react';
import "./navbar.css";
import NavLink from "react-router-dom";
const Navbar = () => {

    const [top, setTop] = useState(0)
    useEffect(()=>{
        window.addEventListener("scroll", changeNavbar)
        return () => {
            window.removeEventListener("scroll", changeNavbar)
        }
    },[])
    const changeNavbar = (e) => {
        setTop(window.pageYOffset)
    }

    return (
        <div>
            <nav className={top > 10? "navbar navbar-bg":"navbar"}>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink to="/">Joodar</NavLink></li>
                    <li className="nav-item"><NavLink to="/">Yarik</NavLink></li>
                    <li className="nav-item"><NavLink to="/">Vodila</NavLink></li>
                    <li className="nav-item"><NavLink to="/">Hitrec</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;