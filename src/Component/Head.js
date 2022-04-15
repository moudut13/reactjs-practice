import {Container, Nav, Navbar} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Account from "./Pages/Account";

function Head(){
    return(
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Basic Site</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link to="/account">Account</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="/blog" element={ <Blog/>}/>

                    <Route path="/contact" element={<Contact/>}/>

                    <Route path="/about" element={<About/>}/>


                    <Route path="/account" element={<Account/>}/>

                </Routes>
            </div>
        </Router>
    );/*<BrowserRouter>
    <App />
  </BrowserRouter>*/
}
export default Head;