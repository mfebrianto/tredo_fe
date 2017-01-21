import '../../assets/stylesheets/footer.scss';

import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class FooterBar extends React.Component {

  render(){
    return (
			<div className="footer-bar">
				<div className="container">
					Copyright 2016 Tredo Australia Pty Ltd		
						<div className="sosmed-footer">
						<a className="facebook-footer" href="http://facebook.com" target="_blank" />
						<a className="twitter-footer" href="http://twitter.com" />
						</div>
				</div>
			</div>
    	    )
  }
}

export default FooterBar;