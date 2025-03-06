import React, {ReactNode} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      {/* React-Bootstrap Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          {/* Navbar.Brand yerinde Link to="/"; 
              React-Bootstrap <Link> farklı, 
              ya <Link> ile <Navbar.Brand> sarmalayabilir ya da
              "as={Link} to="/"" kullanabilirsiniz. */}
          <Navbar.Brand as={Link} to="/">
            Avukatlık Bürosu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="mainNav" />
          <Navbar.Collapse id="mainNav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Ana Sayfa
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              {/* Diğer nav linkleri */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Ana içerik */}
      <Container className="my-4">{children}</Container>
    </>
  );
};

export default Layout;
