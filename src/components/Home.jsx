
import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner" style={{ maxHeight: '500px', overflowY: 'scroll' }}>
    <div className="carousel-item active">
      <img
        src="/assets/images/home/img1.jpg"
        className="d-block w-100"
        alt="IPhone"
        style={{ height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
      />
    </div>
    <div className="carousel-item">
      <img
        src="/assets/images/home/img2.webp"
        className="d-block w-100"
        alt="IPhone"
        style={{ height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
      />
    </div>
    <div className="carousel-item">
      <img
        src="/assets/images/home/img3.webp"
        className="d-block w-100"
        alt="IPhone"
        style={{ height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
      />
    </div>
    <div className="carousel-item">
      <img
        src="/assets/images/home/img4.webp"
        className="d-block w-100"
        alt="IPhone"
        style={{ height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
      />
    </div>
  </div>
</div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home
