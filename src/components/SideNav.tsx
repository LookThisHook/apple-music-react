import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logos/apple.svg'
import { InputGroup, Form } from 'react-bootstrap'
import { useState } from 'react'

interface SideNavProps {
  
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SideNav = ({ setSearch }: SideNavProps) => {
  const [ss, setSs] = useState<string>('')
  const location = useLocation()
  return (
    <>
      <Link to={'/'} className="navbar-brand d-flex m-3">
        <img src={logo} alt="Apple logo" />
        <p className="mb-0 h3">Music</p>
      </Link>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          setSearch(ss)
        }}
      >
        <InputGroup className="ms-3 w-75">
          <InputGroup.Text
            id="basic-addon1"
            role="button"
            className="px-2 py-1"
          >
            <i className="fas fa-search text-danger"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Cerca"
            aria-describedby="basic-addon1"
            className="px-2 py-1"
            value={ss}
            onChange={(e) => {
              setSs(e.target.value)
            }}
          />
        </InputGroup>
      </Form>
      <Link
        to={'/'}
        role="button"
        className="navbar-brand d-flex mx-3 mb-1 ps-1 mt-4"
      >
        <i className="fas fa-home text-danger me-2 mt-1"></i>
        <p className="mb-0 text-white">Home</p>
      </Link>
      <Link
        to={'/'}
        role="button"
        className={
          location.pathname === '/'
            ? 'button rounded-1 bg-dark-subtle navbar-brand d-flex mx-3 my-1 ps-1'
            : 'navbar-brand d-flex mx-3 mb-1 ps-1 mt-1'
        }
      >
        <i className="fas fa-th-large text-danger me-2 mt-1"></i>
        <p className="mb-0 text-white">Novità</p>
      </Link>
      <Link
        to={'/'}
        role="button"
        className="navbar-brand d-flex mx-3 my-1 ps-1"
      >
        <i className="fas fa-broadcast-tower text-danger me-2 mt-1"></i>
        <p className="mb-0 text-white">Radio</p>
      </Link>
    </>
  )
}
export default SideNav
