import "../StylePages/StyleService/ServiceCard.css";

const ServiceCard = ({ src }) => {
  return (
    <div className="servicecard">
      <img src={src} alt="" />
    </div>
  );
};

export default ServiceCard;
