import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <div className="bg-primary text-white py-5">
      <Container>
        <Row>
          <Col md={8}>
            <h1>Welcome to the Chelsea Fan Page</h1>
            <p>
              This is the ultimate destination for all the Chelsea fans out there. Stay updated with the latest news, match highlights, and more.
            </p>
          </Col>
          <Col md={4}>
            <img src="https://www.chelseafc.com/content/cfc/en/homepage/header/nav-header-logo.png" alt="Chelsea Logo" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.chelseafc.com/content/cfc/en/homepage/matches/upcoming-fixtures/_jcr_content/matchList/matchListItem_100/0/image.img.png/1641873617082.png" alt="Upcoming Fixtures" />
              <Card.Body>
                <Card.Title>Upcoming Fixtures</Card.Title>
                <Card.Text>
                  Stay updated with the upcoming matches and fixtures of Chelsea FC.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.chelseafc.com/content/cfc/en/homepage/matches/previous-fixtures/_jcr_content/matchList/matchListItem_100/0/image.img.png/1642492937086.png" alt="Previous Results" />
              <Card.Body>
                <Card.Title>Previous Results</Card.Title>
                <Card.Text>
                  Check out the results of the previous matches of Chelsea FC.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.chelseafc.com/content/cfc/en/homepage/news/_jcr_content/moreNewsImage.img.png/1641975312572.png" alt="Latest News" />
              <Card.Body>
                <Card.Title>Latest News</Card.Title>
                <Card.Text>
                  Get the latest news and updates about Chelsea FC.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;