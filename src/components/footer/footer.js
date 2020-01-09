import React, {Component} from 'react';
import f from './footer.module.css/footer.module.css';

const Footer = (props) => {
  return (
    <div>
    <div className={f.header_logo}>
    logo
   </div>
   <div className={f.header_authorize}>
   login <br />
    regisrtation
   </div>
    </div>
  )
}

export default Footer;
