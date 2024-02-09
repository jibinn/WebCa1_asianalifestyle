import React from 'react';
import './AsiaAboutPage.css'; // Import your CSS file
import DiscountImage from '../images/asimg.jpg'; // Import discount image

const AsiaAboutPage = () => {
  return (
    
    <div className="about-container">
      <div className="about-content">
        <h1>Welcome to Asianalifestyle</h1>
        <p>At Asianalifestyle, we bring you the best of Asian items, ranging from clothing, accessories, home decor, and more. Our mission is to provide high-quality products with unique Asian designs to our customers worldwide.</p>
        <p>Get ready to explore our vast collection of products curated from different Asian cultures, traditions, and artisans.</p>
        <h2>Special Offers and Discounts</h2>
        <div className="discount-section">
          <div className="discount-info">
            <p>Enjoy exclusive discounts and offers on selected items at Asianalifestyle.</p>
            <p>Don't miss out on our special discount days where you can save big on your favorite products.</p>
            <p>Students can avail an extra 10% discount on purchases over 40 euros with a valid student ID.</p>
          </div>
          <div className="discount-image">
            <img src={DiscountImage} alt="Discount" />
            <div className="discount-tag">Discount!</div> {/* Highlighted discount tag */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsiaAboutPage;
