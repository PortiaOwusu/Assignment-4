import ServiceNavItem from "./ServiceNavItem";
import "../StylePages/StyleService/ServiceNav.css";
const ServicesNav = () => {
  return (
    <ul className="servicenav">
      <ServiceNavItem service="Executive Homes" servicetype="/executive" />
      <ServiceNavItem service="Apartments" servicetype="/apartment" />
      <ServiceNavItem service="Offices" servicetype="/office" />
    </ul>
  );
};

export default ServicesNav;
