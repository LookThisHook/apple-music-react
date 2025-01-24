import { Button, Col, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/logos/apple.svg'
import musicLogo from '../assets/logos/music.svg';


const MyNav = () => {
  const location = useLocation()
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        data-bs-theme="light"
        sticky="top"
        className=" d-lg-none "
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ms-3 text-danger"
        />
        <Link to={'/'} className="navbar-brand ">
          <img src={musicLogo} alt="Apple logo" className="mb-2" />
          Music
        </Link>
        <Nav.Link className="text-danger me-3" href="#">
          Accedi
        </Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center ms-auto d-lg-none">
            <Link className="nav-link text-white" to={'/'}>
              Home
            </Link>
            <Link
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
              to={'/'}
            >
              Novità
            </Link>
            <Link className="nav-link" to={'/'}>
              Radio
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        bg="light"
        data-bs-theme="light"
        sticky="top"
        className="d-none d-lg-flex bg-muted"
      >
        <Col
          lg={4}
          className="buttons d-flex align-items-center justify-content-center flex-wrap gap-3 opacity-25  "
        >
          <div role="button" className="random-track">
            <i className="fas fa-random fs-6 hov"></i>
          </div>
          <div role="button" className="prev-track">
            <i className="fa fa-step-backward fs-6 hov"></i>
          </div>
          <div role="button" className="playpause-track ">
            <i className="fa fa-play fs-5 hov"></i>
          </div>
          <div role="button" className="next-track">
            <i className="fa fa-step-forward fs-6 hov"></i>
          </div>
          <div role="button" className="repeat-track ">
            <i className="fas fa-sync fs-6 hov"></i>
          </div>
        </Col>
        <Col className="d-flex" lg={4}>
          <Button
            className=" flex-grow-1 rounded-0 border-0 opacity-75"
            variant="secondary"
          >
            <img src={logo} alt="Apple logo" className="mb-2" />
          </Button>
        </Col>
        <Col lg={2} className="d-flex justify-content-center opacity-50">
          <div className="d-flex justify-content-center align-items-center w-50 text-center">
            <i className="fa fa-volume-down me-1"></i>
            <input
              role="button"
              type="range"
              min="1"
              max="100"
              className="w-75"
            />
          </div>
        </Col>
        <Col lg={2} className="d-flex justify-content-center">
          <Button className="mx-2 py-1 px-2 red" variant="danger">
            <i className="fas fa-user-alt small-text"></i> Accedi
          </Button>
        </Col>
      </Navbar>
    </>
  )
}

export default MyNav
