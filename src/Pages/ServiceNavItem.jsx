import { Link } from "react-router-dom";

const ServiceNavItem = ({ servicetype, service }) => {
  return (
    <Link className="servicenavitem" to={servicetype}>
      <li>{service}</li>
    </Link>
  );
};
<li></li>;
export default ServiceNavItem;
