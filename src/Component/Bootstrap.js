import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./BootStrap.css";

function Bootstrap(){
    return(
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand><Nav.Link className="icon" to="/">Basic Site</Nav.Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link active className="link active" to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link className="link active" to="blog">Blog</Link></Nav.Link>
                                <Nav.Link><Link className="link active" to="contact">Contact</Link></Nav.Link>
                                <Nav.Link><Link className="link active" to="about">About</Link></Nav.Link>
                                <Nav.Link><Link className="link active" to="account">Account</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}
export default Bootstrap;