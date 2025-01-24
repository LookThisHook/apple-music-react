import { Col, Container, Row } from 'react-bootstrap'

const MyFooter = () => {
  return (
    <Container
      fluid
      className="small-text bg-body-secondary pt-3 mt-3 pb-5 pb-lg-2"
    >
      <Row className=" justify-content-center">
        <Col xs={11}>
          <div className="d-flex gap-2">
            <p>Italia </p>
            <p className="opacity-50"> | </p>
            <p className="opacity-50"> English(Uk) </p>
          </div>
          <div className="d-flex gap-2">
            <p className="opacity-50">Copyrigth © {new Date().getFullYear()}</p>
            <p>Apple Inc.</p>
            <p className="opacity-50"> Tutti i diritti riservati. </p>
          </div>
          <div className="d-flex gap-2 flex-wrap pb-3 pb-lg-0">
            <p>Condizioni dei servizi internet</p>
            <p className="opacity-50"> | </p>
            <p>Apple Music e Privacy</p>
            <p className="opacity-50"> | </p>
            <p>Avviso sui cookie</p>
            <p className="opacity-50"> | </p>
            <p>Supporto</p>
            <p className="opacity-50"> | </p>
            <p>Feedback</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default MyFooter
