import { NavLink } from "react-router-dom";
import "../StylePages/StyleHome/Header.css";

const Header = () => {
  return (
    <div className="head1">
      <h1>Prime Estate</h1>
      <ul>
        <NavLink activeClassName="active" exact to="/">
          <li>Home</li>
        </NavLink>

        <NavLink activeClassName="active" to="/service">
          <li>Service</li>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
