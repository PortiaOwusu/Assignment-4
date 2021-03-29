import ServicesNav from "./ServicesNav";
import "../StylePages/StyleService/Service.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Executive from "./Executive";
import Apartment from "./Apartment";
import Office from "./Office";
const ServicePage = () => {
  return (
    <div className="servicepage">
      <BrowserRouter>
        <h1>Best Real Estate Deals</h1>

        <ServicesNav />

        <Switch>
          <Route path="/executive" component={Executive} />
          <Route path="/apartment" component={Apartment} />
          <Route path="/office" component={Office} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default ServicePage;
