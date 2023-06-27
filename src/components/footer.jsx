import React from 'react';
import { ArrowRight,Facebook } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer>
      
      <ul>
        <li><a href="https://twitter.com">Twitter</a></li>
        <li><a href="https://facebook.com">Facebook</a><Facebook/></li>
        <li><a href="https://instagram.com">Instagram</a></li>
      </ul>
      <p>© 2023 My Company</p>
    </footer>
  );
};
export default Footer;
