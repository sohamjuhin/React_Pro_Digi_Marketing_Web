import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import IndustriesServed from './components/IndustriesServed';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import Resources from './components/Resources';
import PrivacyTerms from './components/PrivacyTerms';
import Awards from './components/Awards';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/industries">Industries Served</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/privacy-terms">Privacy Policy & Terms</Link>
            </li>
            <li>
              <Link to="/awards">Awards & Certifications</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Homepage} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={AboutUs} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/industries" component={IndustriesServed} />
        <Route path="/blog" component={Blog} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/resources" component={Resources} />
        <Route path="/privacy-terms" component={PrivacyTerms} />
        <Route path="/awards" component={Awards} />
      </div>
    </Router>
  );
};

export default App;
