import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import fullstack from "../assets/img/fullstack.png"
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>A closer look at my skillset</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image" className="skillImage"/>
                                    <h5>Mechanical Design Engineering</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image" className="skillImage"/>
                                    <h5>Full Stack Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image" className="skillImage"/>
                                    <h5>Mobile App Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image" className="skillImage"/>
                                    <h5>Robot Controls Engineering</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image" className="skillImage"/>
                                    <h5>Technical Leadership</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image" className="skillImage"/>
                                    <h5>3d Printing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}