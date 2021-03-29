import { NavLink } from "react-router-dom";
import "../StylePages/StyleHome/Header.css";
import logo from "../StylePages/img/image3.png";

const Header = () => {
  return (
    <div className="head1">
      {/* <img src={logo} alt="logo" /> */}
      <h1>Prime Estate</h1>
      <ul>
        <NavLink activeclassName="active" to="/">
          <li>Home</li>
        </NavLink>

        <NavLink activeclassName="active" to="/service">
          <li>Service</li>
        </NavLink>
        <NavLink to="/about" activeclassName="active">
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
