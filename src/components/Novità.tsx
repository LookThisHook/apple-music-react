import { Col, Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import NuovaStazione from './NuovaStazione'
import SongCard from './SongCard'
import IData from '../types/IData'
import Error1 from './Error1'
import Loading from './Loading'
import Response from '../types/Response'
import SongCardFetch from './SongCardFetch'

import img1 from '../assets/images/1a.png'
import img2 from '../assets/images/1b.png'
import img4 from '../assets/images/2a.png'
import img5 from '../assets/images/2b.png'
import img6 from '../assets/images/2c.png'
import img7 from '../assets/images/2d.png'
import img8 from '../assets/images/2e.png'
import img9 from '../assets/images/2f.png'
import Buttons from './Buttons'

interface NovitaProps {
  search: string | null
}

const Novità = ({ search }: NovitaProps) => {
  const [music, setMusic] = useState<IData[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const ButtonArray: string[] = [
    'Esplora per genere',
    'Decenni',
    'Attività',
    'Worldwide',
    'Classifiche',
    'Audio spaziale',
    'Video musicali',
    'Nuovi artisti',
    'Hits dal passato',
  ]

  const getSongs = async () => {
    if (search) {
      fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('no ok')
          }
        })
        .then((data: Response) => {
          console.log(data)
          setMusic(data.data)
          setLoading(false)
        })
        .catch((error) => {
          setError(true)
          console.log(error)
        })
    }
  }

  useEffect(() => {
    getSongs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <Container fluid className='bg-dark'>
      <Row className=" justify-content-center">
        <Col xs={11} >
          <h2 className="mt-5 mb-0 text-white">Novità</h2>
          <hr />
          <Row className='bg-dark'>
            <NuovaStazione
              img={img1}
              text="Rilassati, al resto pensiamo noi. Ascolta Apple chill music."
              
            />
            <NuovaStazione
              img={img2}
              text="Ecco la nuova casa della musica latina"
            />
          </Row>
          <div className="d-flex mt-5">
            <h5 className="mb-0 text-white">Nuovi episodi radio</h5>
            <p className="mb-0 ms-2 opacity-50">
              <i className="fas fa-chevron-right small-text"></i>
            </p>
          </div>
          <Row className="mt-4">
            <Col xs={4} md={3} lg={2}>
              <SongCard img={img4} text={'Prològo con Abuelo'} explicit />
            </Col>
            <Col xs={4} md={3} lg={2}>
              <SongCard img={img5} text={'The Wanderer'} />
            </Col>
            <Col xs={4} md={3} lg={2} className="d-md-none d-lg-block">
              <SongCard img={img6} text={'Michael Bublè & Carly Pearce'} />
            </Col>
            <Col xs={4} md={3} lg={2} className="d-md-none d-lg-block">
              <SongCard
                img={img7}
                text={'Stephan Moccio: The Zane Lowe Interview'}
              />
            </Col>
            <Col xs={4} md={3} lg={2}>
              <SongCard img={img8} text={'Chart Spotlight: Julia Michaels'} />
            </Col>
            <Col xs={4} md={3} lg={2}>
              <SongCard img={img9} text={'Karri & Travis Mills'} />
            </Col>
          </Row>
          <div className="d-flex mt-5">
            <h5 className="mb-0 text-white">Nuove uscite</h5>
            <p className="mb-0 ms-2 opacity-50">
              <i className="fas fa-chevron-right small-text"></i>
            </p>
          </div>
          <Row className="mt-4">
            {error && <Error1 />}
            {loading && <Loading />}
            {!loading &&
              !error &&
              music.slice(0, 12).map((m) => {
                return <SongCardFetch key={m.id} music={m} />
              })}
          </Row>
          <div className="d-flex mt-5 mb-3">
            <h5 className="mb-0 text-white">Altro da esplorare</h5>
          </div>
          <Row >
            {ButtonArray.map((b, i) => {
              return <Buttons key={i} text={b} />
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Novità
