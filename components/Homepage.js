import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Our Digital Marketing Company</h1>
      <p>We are a leading digital marketing agency that helps businesses achieve their online goals.</p>
      <p>Our services include search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, and more.</p>
      <Link to="/services">
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default Homepage;
