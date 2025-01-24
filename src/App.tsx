import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import NotFound from './components/NotFound'
import Novità from './components/Novità'
import MyNav from './components/MyNav'
import SideNav from './components/SideNav'
import MyFooter from './components/MyFooter'
import PlayerMobile from './components/PlayerMobile'

function App() {
  const [search, setSearch] = useState<string>('eminem')
  return (
    <BrowserRouter>
      <Container fluid className=" position-relative">
        <header>
          <Row className=" justify-content-end">
            <Col xs={12} lg={9} className="p-0">
              <MyNav />
            </Col>
          </Row>
        </header>
        <main>
          <Row className=" justify-content-end">
            <Col
              lg={3}
              className="d-none d-lg-flex flex-column position-absolute top-0 start-0 bg-dark border-end border-1 border-light page overflow-auto"
            >
              <SideNav setSearch={setSearch} />
            </Col>
            <Col xs={12} lg={9} className="p-0 overflow-auto scroll">
              <Routes>
                <Route path="/" element={<Novità search={search} />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
              <MyFooter />
            </Col>
          </Row>
        </main>
        <PlayerMobile />
      </Container>
    </BrowserRouter>
  )
}

export default App
