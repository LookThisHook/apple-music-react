import { Card, Col } from 'react-bootstrap'

interface NuovaStazioneProps {
  img: string
  text: string
  
}

const NuovaStazione = (props: NuovaStazioneProps) => {
  return (
    <Col xs={6} className="d-flex  bg-dark p-2">
      <Card className="border-0 bg-dark">
        <Card.Body className="p-0 mb-2 bg-dark text-white">
          <Card.Text  className=" text-uppercase mb-0 opacity-50 small-text p-0 bg-dar">
            Nuova stazione radio
          </Card.Text>
          <Card.Text className="p-0 bg-dark">{props.text}</Card.Text>
        </Card.Body>
        <Card.Img
          className=" rounded-2 animation bg-dark"
          src={props.img}
          role="button"
        />
      </Card>
    </Col>
  )
}
export default NuovaStazione
