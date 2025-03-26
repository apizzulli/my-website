
import React from 'react'
import AppStyling from '../style/app-banner-style.css'
import { AiOutlineMenuFold } from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import Menu from './Menu'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function AppBanner(){ 
    const [menuClosed, setMenuClosed] = React.useState(false);
    let menuClosedIcon = 
        <div>
            <AiOutlineMenuFold onClick={toggleMenu} style={{float: 'right', color:'white', fontSize: '20pt', verticalAlign: 'middle', marginRight: '1%'}}></AiOutlineMenuFold>
        </div>;
    let menuOpen = 
        <div>
            <AiOutlineMenuUnfold onClick={toggleMenu} style={{float: 'right', color: 'white', fontSize: '20pt',marginRight: '1%'}}></AiOutlineMenuUnfold>
            <Menu></Menu>
        </div>;

    function toggleMenu() {
        console.log("toggling menu");
        setMenuClosed(!menuClosed);
    }

    if(menuClosed){
        return(
            <div class="app-banner">Anthony J Pizzulli
                {menuClosedIcon}
            </div>
        );
    }
    else {
        return(
            <Navbar style={{backgroundColor: 'white'}} bg="dark" data-bs-theme="dark" expand="xxl" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Anthony's Site</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/aboutme">About Me</Nav.Link>
                  <Nav.Link href="/photos">Photos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}
