import { Button, Card } from 'react-bootstrap'

interface SongCardProps {
  img: string
  text: string
  explicit?: boolean
}

const SongCard = (props: SongCardProps) => {
  return (
    <Card className="border-0 bg-dark text-white" role="button">
      <Card.Img className=" rounded-2 animation" src={props.img} />
      <Card.Body className="p-0 mb-2 d-flex justify-content-between">
        <Card.Text className="p-0 my-1 small-text">{props.text}</Card.Text>
        {props.explicit && (
          <Button className="bg-secondary border-0 rounded-1 py-0 px-1 super-small mt-1 mb-auto opacity-75">
            E
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
export default SongCard
