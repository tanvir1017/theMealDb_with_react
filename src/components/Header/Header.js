import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap';


const Header = (props) => {
    const {handler} = props
    return (
        <>
        <Navbar bg="dark" expand="lg" className="">
        <Container>
            <img src="https://react-bootstrap.netlify.app/logo.svg" alt=""  className="img-fluid"
            style={{
                width:"50px"
            }}
            />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <NavLink href="/home" active className="text-white">Home</NavLink>
                <NavLink href="/contact" active  className="text-white">Contact us</NavLink>
                <NavLink href="/about" active  className="text-white">About</NavLink>
                <NavLink href="/exit" active  className="text-white">Exit</NavLink>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                onChange={handler}
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    );
};

export default Header;