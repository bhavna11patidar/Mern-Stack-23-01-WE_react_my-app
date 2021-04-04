import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
            <Link to="/about" className="nav-link">About</Link>
             </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">Contact</Link>
            </NavItem>
            <NavItem>
              <Link to="/formdataState" className="nav-link">Form Data With State</Link>
            </NavItem>
            <NavItem>
              <Link to="/hookexample" className="nav-link">Hooks</Link>
            </NavItem>     
            <NavItem>
              <Link to="/formdatahooks" className="nav-link">Form Data Hooks</Link>
            </NavItem>  
            <NavItem>
              <Link to="/hoccounter1" className="nav-link">HOC counter 1 </Link>
            </NavItem> 
            <NavItem>
              <Link to="/hoccounter2" className="nav-link">HOC counter 2 </Link>
            </NavItem>  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
