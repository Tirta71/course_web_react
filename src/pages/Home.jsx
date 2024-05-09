import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
function Home() {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" md="12">
              <h1 className="mb-4">
                Temukan <br /> <span>Bakat Kreatifmu</span> <br />
                Bersama Kami
              </h1>
              <p className="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                vitae consectetur provident repudiandae, perspiciatis iste.
              </p>
              <button className="btn btn-danger btn-lg rounded me-2 mb-xs-0 mb-2">
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded mb-2">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" md="12" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="HeroImg" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Kelas Terbaru</h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
