import { Card, Image } from "react-bootstrap";
import Link from 'next/link';
import { urlFor } from "lib/api";

const CardItem = ({title, subtitle, image, date, author, link}) => {
  return (
    <Card className={`rf-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Image
            src={author.avatar}
            className="rounded-circle mr-3"
            height="64"
            width="64"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author.name}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            src={urlFor(image)
              .height(200)
              .crop('center')
              .fit('clip')
              .url()}
              height="250px"
              width="250px"
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      { link &&
        <Link {...link}>
          <a className="card-button">Read More</a>
        </Link>
      }
    </Card>
  );
};

export default CardItem;
