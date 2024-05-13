import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import steps from '../images/steps-banner.png';

import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our
        {' '}
        <span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/blog-1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                21st June, 2023
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                21st June, 2023
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-3.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                21st June, 2023
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
      <section className="step-section">
        <div className="Steps">
          <h1 className="heading">
            How
            {' '}
            <span>It Works</span>
          </h1>
          <div className="image-container">
            <img src={steps} alt="banner" className="steps-image" />
            <div className="text-overlay">
              <div className="text-ov">
                <h1 className="text">1</h1>
                <p>
                  Visit freshlo.ca to browse our available Fresh Groceries.
                </p>
              </div>
              <div className="text-ov">
                <h1 className="text">2</h1>
                <p>
                  Select your chosen Groceries, input your delivery address,and pay securely online.
                </p>
              </div>
              <div className="text-ov">
                <h1 className="text">3</h1>
                <p>
                  The Fresh Groceries will be at your doorstep at your chosen time and day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
