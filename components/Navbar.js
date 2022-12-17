import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
const BlogNavbar = () => {
  return (
    <Navbar className="rf-navbar rf-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="rf-navbar-brand">
        <Link href = "/">
          <a>Quaternion Universe</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link  
            as={()=>
              <Link href="/">
                <a className="rf-navbar-item rf-navbar-link">Home</a>
              </Link>
            } 
          />
          {/* <Nav.Link  
            as={()=>
              <Link href="/projects">
                <a className="rf-navbar-item rf-navbar-link">Projects</a>
              </Link>
            } 
          /> <-- for projects tab later after initial deployment*/}
          <Nav.Link  
            as={()=>
              <Link href="/resume">
                <a className="rf-navbar-item rf-navbar-link">Resume</a>
              </Link>
            } 
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
