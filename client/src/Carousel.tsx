import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carousel.css';

const Carousel = () => {
    useEffect(() => {
        const myCarousel = document.querySelector('#carouselExample');
        if (myCarousel && (window as any).bootstrap) {
          new (window as any).bootstrap.Carousel(myCarousel, {
            interval: 3000,
            ride: 'carousel',
            pause: 'hover',
          });
        }
      }, []);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="public/aldrichHammock.jpg"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='card-desc'>Relaxing in Aldrich Park</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="public/gaming.jpg"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='card-desc'>Gaming in the E-Sports Arena</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="public/irvineBeach.png"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='card-desc'>Fun at Newport Beach</h5>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
