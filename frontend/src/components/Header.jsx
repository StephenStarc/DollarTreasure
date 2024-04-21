import {Navbar, Nav, Container} from 'react-bootstrap'
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import {LinkContainer} from 'react-router-bootstrap'

export default function Header(){
return (
    <header>
        <Navbar className="text-white" bg='dark' varient="dark" expand='md' collapseOnSelect >
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>Dollar Treasure</Navbar.Brand>
                </LinkContainer>
             
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                    <LinkContainer to="/cart">
                        <Nav.Link><FaCartArrowDown /> Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link ><IoMdLogIn /> Sign-in</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
)
}