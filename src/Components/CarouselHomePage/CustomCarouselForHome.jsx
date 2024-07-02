import BootstrapCarousel from 'react-bootstrap/Carousel';
import image1 from '../assets/hero-bg-2.png';
import image2 from '../assets/hero-psge-2.png';
// import image3 from '../assets/survey-form-background (1).jpeg';


const CustomCarouselForHome = () => {
  return (
    <BootstrapCarousel data-bs-theme="transparent">
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default CustomCarouselForHome;