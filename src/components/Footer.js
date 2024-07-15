import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h2 className="logoText"><b>Brandon Shen</b></h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/brandon-shen-b7261b2b7/" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
                <a href="https://github.com/BrandonS09" target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.instagram.com/_brandon.s__/" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}