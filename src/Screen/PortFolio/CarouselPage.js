import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profile from "../../Assets/profile.jpg";
import "./carouselPage.css";
import carosole from "../../Assets/carosole.jpg";
import carosole2 from "../../Assets/carosole2.jpg";

function CarouselPage() {
  return (
    <div className="image_carousel">
      <div className="carousel_Main">
        <Carousel
          autoPlay
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
          showStatus={false}
          showIndicators={false}
        >
          <div className="carousel-slider">
            <img alt="" src={carosole} />
          </div>
          <div className="carousel-slider">
            <img alt="" src={carosole2} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default CarouselPage;
