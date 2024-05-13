import { NavLink  } from 'react-router-dom' 

import './Nav.css'

function Nav() {
  return (
    <div>
      <nav className="nav-container">
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : null)}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : null)}
          to={"/rey/atanagildo"}
        >
          Atanagildo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : null)}
          to={"/rey/ataulfo"}
        >
          Ataulfo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : null)}
          to={"/rey/ervigio"}
        >
          Ervigio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : null)}
          to={"/rey/leovigildo"}
        >
          Leovigildo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : null)}
          to={"/rey/recesvinto"}
        >
          Recesvinto
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : null)}
          to={"/rey/sisebuto"}
        >
          Sisebuto
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav
