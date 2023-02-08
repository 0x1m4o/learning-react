import Carousel from 'react-bootstrap/Carousel';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function IntervalsCarousel() {
    return (
        <div className="container carousel">
        <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="images/carousel-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div class="d-block text-start align-items-center">
            <h3 class="text-warning fw-bold">Mulai Rencanakan Pernikahanmu Bersama Maritory</h3>
            <h5 class="text-white">Menikah akan lebih mudah dengan menabung lebih awal mulai sekarang!</h5>
            <a href='#' className='text-decoration-none text-white'>Pelajari lebih lanjut<i class="bi bi-arrow-right m-2 text-light"></i></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="images/carousel-2.png"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="images/carousel-3.png"
            alt="Third slide"
          />
       
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="images/carousel-4.png"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
        </div>
    );
}

export default IntervalsCarousel;