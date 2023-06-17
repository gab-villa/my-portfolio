import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavbarPage = () =>
{
    return (
    <Navbar className="px-5 " expand="sm" fixed="top" bg="dark" variant="dark">
            
            <Navbar.Brand className="">
              GV
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav navbarScroll className="my-0 w-100 justify-content-center">
            <Nav.Item className="mx-1">
                <Nav.Link href="#Home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-1">
                <Nav.Link href="#Portfolio">
                  Portfolio
                </Nav.Link>
              </Nav.Item >
              <Nav.Item className="mx-1">
                <Nav.Link href="#Contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
              
            </Nav>
            <a href="https://www.linkedin.com/in/gabriel-villa-47a04a1a5/" target="_blank">
            <img className="my-2 my-sm-0 mx-2 filter-dark-mode" src="linkedin.svg" width="25" height="25"/>
            </a>
            <a href="https://github.com/gab-villa" target="_blank">
            <img className="my-2 my-sm-0 mx-2 filter-dark-mode" src="github.svg" width="25" height="25"/>
            </a>

            </Navbar.Collapse>
              
          </Navbar>
    );
}