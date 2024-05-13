import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay]);

export default function Products({ addToCart }) {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>
      <div className="products-slider slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            <SwiperSlide>
              <div className="box">
                <img src="image/product-1.png" alt="" />
                <h3>Juicy Oranges</h3>
                <div className="price">₹120/- per kg</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'Juicy Oranges',
                      price: 120,
                      image: 'image/product-1.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/product-2.png" alt="" />
                <h3>Fresh onions</h3>
                <div className="price">₹35/- per kg</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'Fresh Onions',
                      price: 35,
                      image: 'image/product-2.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/product-3.png" alt="" />
                <h3>High-Quality Meat</h3>
                <div className="price">₹550/- per kg</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'High-Quality Meat',
                      price: 550,
                      image: 'image/product-3.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/product-4.png" alt="" />
                <h3>Fresh Cabbage</h3>
                <div className="price">₹40/- Each(approx 1kg)</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'Fresh Cabbage',
                      price: 40,
                      image: 'image/product-4.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="products-slider slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 6500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            <SwiperSlide>
              <div className="box">
                <img src="image/product-5.png" alt="" />
                <h3>Fresh Potato</h3>
                <div className="price">₹25/- per kg</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'Fresh Potato',
                      price: 25,
                      image: 'image/product-5.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/product-6.png" alt="" />
                <h3>Nutritious Avocado</h3>
                <div className="price">₹149/- each (250 gm)</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'Nutritious Avocado',
                      price: 149,
                      image: 'image/product-6.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/product-7.png" alt="" />
                <h3>Healthy Carrots</h3>
                <div className="price">₹45/- per kg</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'Healthy Carrots',
                      price: 45,
                      image: 'image/product-7.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/product-8.png" alt="" />
                <h3>Green Lemons</h3>
                <div className="price">₹5/- each</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    addToCart({
                      name: 'Green Lemons',
                      price: 5,
                      image: 'image/product-8.png',
                      quantity: 0,
                      totalprice: 0,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
