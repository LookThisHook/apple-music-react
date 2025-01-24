import { Card } from 'react-bootstrap'

import img5 from '../assets/images/2b.png'

const PlayerMobile = () => {
  return (
    <div className="fixed-bottom d-lg-none pb-2">
      <Card className="d-flex flex-row bg-body-secondary mx-4 justify-content-between">
        <Card.Img className="img-fluid sma m-1" src={img5} />
        <Card.Text className=" align-self-center opacity-50">
          <i className="fas fa-play"></i>
          <i className="fas fa-forward mx-2"></i>
        </Card.Text>
      </Card>
    </div>
  )
}
export default PlayerMobile
