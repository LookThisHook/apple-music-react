import { Button, Card, Col } from 'react-bootstrap'

import IData from '../types/IData'

interface SongCardFetchProps {
  music: IData
}

const SongCardFetch = ({ music }: SongCardFetchProps) => {
  return (
    <Col xs={4} md={3} lg={2}>
      <Card className="border-0 bg-dark text-white" role="button">
        <Card.Img className=" rounded-2 animation" src={music.album.cover} />
        <Card.Body className="p-0 mb-2 d-flex justify-content-between">
          <Card.Text className="p-0 my-1 small-text">{music.title_short}</Card.Text>
          {music.explicit_lyrics && (
            <Button className="bg-secondary border-0 rounded-1 py-0 px-1 super-small mt-1 mb-auto opacity-75">
              E
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SongCardFetch
