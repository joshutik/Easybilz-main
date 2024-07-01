import BootstrapCarousel from 'react-bootstrap/Carousel';
import image1 from '../assets/Contact img.png';
import image2 from '../assets/taufiq-triadi-bHJ3jT-nIrI-unsplash.jpg';
import image3 from '../assets/survey-form-background (1).jpeg';


const CustomCarousel = () => {
  return (
    <BootstrapCarousel data-bs-theme="dark">
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <BootstrapCarousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <BootstrapCarousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <BootstrapCarousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default CustomCarousel;