import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../pages/static/styles.css'
function MainNav() {
    return (
        <Navbar fixed="top" className="navbar bg-primary" expand="lg">
            <Container fluid >
                <Navbar.Brand href="#home"><img id="logo" src="http://localhost:5000/base/images/ckan-logo.png" alt='' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div id="Nav-1">
                    <Nav className='Nav1'>
                        <Nav.Link href="#deets">Log In</Nav.Link>
                        <Nav.Link href="#memes">Register</Nav.Link>
                    </Nav>
                </div>
                    <Nav id="nav-items" className="me-auto my-2 my-lg-4"
                        style={{ maxHeight: '100px' }}>
                        <Nav.Link href="#">Datasets</Nav.Link>
                        <Nav.Link href="#">Organizations</Nav.Link>
                        <Nav.Link href="#">Groups</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav><br /><br />
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <button action="submit" type="button" class="btn btn-primary">
                            <i class="fas fa-search"></i>
                        </button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MainNav;