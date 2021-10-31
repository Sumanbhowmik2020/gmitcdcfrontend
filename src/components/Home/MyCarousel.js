import { Carousel } from 'react-bootstrap';
import img1 from '../../img/gmit1.jpg';
import img2 from '../../img/gmit2.jpg';
import img3 from '../../img/gmit3.jpg';
//import '../../css/customcss4.css';

function MyCarousel() {
  return (
    <>
      <div className='container p-2'>
        <Carousel>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Second slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />


          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default MyCarousel;