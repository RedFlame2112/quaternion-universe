
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Image, Card } from "react-bootstrap";
const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        <Card className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://cdn.discordapp.com/attachments/819417070185480202/1021110155322081370/unknown.png"
            alt="Generic placeholder"
          />
          <Card.Body>
            <h5 className="font-weight-bold mb-0">How you going,</h5>
            <p className="welcome-text">
              My name is Sagnik Chakraborty and I am a freelance developer.
              Welcome to my personal blog app!
            </p>
            <p>
              I cover multiple topics, from CTF writeups to life in general!
            </p>
          </Card.Body>
          
        </Card>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
