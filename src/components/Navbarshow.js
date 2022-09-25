import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Cart from '../cart/Cart';
import './Navbarshow.css'
import { Link } from 'react-router-dom';

const Navbarshow = () => {
    const cartItems = useSelector((state) => state.cartitem.cart);
   
    return (
        <div>
            <div className='contaiiner-fluid'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Container>
                             <Link to='/'><Navbar.Brand >My Shoping App</Navbar.Brand></Link>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <div className='d-flex'>
                                    <Navbar.Collapse id="responsive-navbar-nav ">
                                        <Nav>
                                            <Link to="/showcart">
                                            <a className="btn btn-light position-relative  "  >
                                                <span className="position-absolute top-0 start-100 translate-middle p-2 badge rounded-pill text-danger back">
                                                    {cartItems ? cartItems.length : 0}
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                            </a>
                                            </Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </div>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbarshow