import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopBarMenu extends React.Component {

  render(){
    return (
      <Navbar inverse collapseOnSelect className='tredo-navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <div className='tredo-logo'/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className='nav-left'>
            <NavItem eventKey={1} href="#">Categories</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" className='login-label'>Log in</NavItem>
            <NavItem eventKey={2} href="#">
              <div className='sign-up-label'>
                Sign up
              </div>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopBarMenu;