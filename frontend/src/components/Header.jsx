import {Navbar, Nav, Container} from 'react-bootstrap'
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";

export default function Header(){
return (
    <header>
        <Navbar className="text-white" bg='dark' varient="dark" expand='md' collapseOnSelect >
            <Container>
                <Navbar.Brand href='/'>Dollar Treasure</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaCartArrowDown /> Cart</Nav.Link>
                        <Nav.Link href='/login'><IoMdLogIn /> Sign-in</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
)
}