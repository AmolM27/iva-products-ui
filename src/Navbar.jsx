import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Iva Products</h1>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
