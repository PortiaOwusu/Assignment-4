import "../StylePages/StyleHome/HomeBackground.css";
import "../StylePages/StyleHome/HomeBoxes.css";
import house from "../StylePages/img/image1.png";
function HomePage() {
  return (
    <div className="home">
      <div className="intro">
        <p>Looking for a property</p>
        <h1>
          <span>Buy </span>and <span>Sell</span> Properties
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          maiores. Obcaecati, atque deserunt velit sequi quasi deleniti dolores!
          Nemo, sint.
        </p>
        <a href="/service" className="header-btn">
          Details
        </a>
      </div>
      {/* <img className="house" src={house} alt="" /> */}
    </div>
  );
}

export default HomePage;
