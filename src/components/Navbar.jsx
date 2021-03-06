import React, { useState, useContext } from "react";
import { userContext } from '../context/UserContext'
import "../css/navBar.css";
import { GiFilmSpool } from 'react-icons/gi';

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const {user,setUser} = useContext(userContext)

    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

    function logout() {
      setUser({})
    }

    return (
      <nav className="nav">
        <li className="nav__item"  >
              <div style={{color: '#ffc107'}} >
              <GiFilmSpool className="logo" size={70}  />
              Movies.com
              </div>
       </li>
        <ul className={active}>
          <li className="nav__item">
            <a href='/' className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href='/signup' className="nav__link">
              Registrarse
            </a>
          </li>
          <li className="nav__item">
              {user.logged?<button onClick={logout} type="button" class="btn btn-link">Salir {user.name}</button>:<a href='/login' className="nav__link">
              Login</a>}
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
}

export default Navbar