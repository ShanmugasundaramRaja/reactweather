import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#eee9e9' }}>
      <Navbar.Brand href="#home" className="mx-3">Accuweather</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar