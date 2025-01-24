import { Card, Col } from 'react-bootstrap'

interface ButtonsProps {
  text: string
}

const Buttons = ({ text }: ButtonsProps) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className=" bg-dark m-2 p-3 animation" role="button">
        <Card.Text className=" d-flex justify-content-between text-danger">
          {text}
          <i className="fas fa-chevron-right small-text align-self-center"></i>
        </Card.Text>
      </Card>
    </Col>
  )
}
export default Buttons
