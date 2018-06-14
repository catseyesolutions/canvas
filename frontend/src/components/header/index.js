import React from 'react';
import Link from 'gatsby-link';
import logo from '../../images/logo.jpg'

const Header = ({ siteTitle }) => (
  <header>
    <nav className='row center-xs full-width' id='desktop-menu-container'>
      <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 for-desktop'>
        <ul className='nav-links full-height' data-alignment='vertical'>
          <li className='nav-link active'><Link to=''>New</Link></li>
          <li className='nav-link'><Link to=''>Popular</Link></li>
          <li className='nav-link'><Link to=''>All</Link></li>
        </ul>
      </div>
      <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
        <div className='brand full-height'>
          <img src={logo} className='logo center-center'/>
          {/* <h1 className='name'><a href="#">Designer Depot</a></h1> */}
          <a href="javascript:void(0);" className="for-mobile center-right burger-menu" onClick={toggleMenu}>
            <span className='fa fa-bars'></span>
          </a>
        </div>
      </div>
      <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 for-desktop'>
      <ul className='nav-links full-height' data-alignment='vertical'>
          <li className='nav-link'><Link to=''>Search</Link></li>
          <li className='nav-link'><Link to=''>Submit</Link></li>
        </ul>
      </div>
    </nav>
    <nav id='mobile-menu-container' className='overlay'>
      <div className='tile center-center'>
        <ul className='text-center nav-links' data-alignment='horizontal'>
          <li className='nav-link active'><Link to=''>New</Link></li>
          <li className='nav-link'><Link to=''>Popular</Link></li>
          <li className='nav-link'><Link to=''>All</Link></li>
          <li className='nav-link'><Link to=''>Search</Link></li>
          <li className='nav-link'><Link to=''>Submit</Link></li>
          <li className='nav-link'><a href="#" className='color-red' onClick={closeMobileMenu}>Close</a></li>
        </ul>
      </div>
    </nav>
 </header>
);

function toggleMenu(){
  var mobileMenu = document.getElementById('mobile-menu-container');
  mobileMenu.style.display='block'
}

function closeMobileMenu(){
  var mobileMenu = document.getElementById('mobile-menu-container');
  mobileMenu.style.display='none'
}

export default Header;
