import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarProy = () => {
    return(
        <>
        <Navbar className="navBg" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" >Proyecto II</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/uno">Actividades</Nav.Link>
                        <Nav.Link as={Link} to="/dos">Sistema</Nav.Link>
                        <Nav.Link as={Link} to="/tres">Código</Nav.Link>
                        <Nav.Link as={Link} to="/cuatro">Reportes</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>        
    )
}
export default NavBarProy