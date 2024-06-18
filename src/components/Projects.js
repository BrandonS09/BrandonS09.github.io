import projImg3 from "../assets/img/project-img3.png";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/img/color-sharp.png";
import BHAC from "../assets/img/BHAC.png";
import Hammerhead from "../assets/img/199.jpg";

export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <section className="skill" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="proj-bx">
                            <h2>
                                Projects
                            </h2>
                            <p>My Projects</p>
                            <Carousel responsive={responsive} infinite={true} className="project-slider">
                                <div className="item">
                                    <h3>FRC 199 2024 Robot</h3>
                                    <img src={Hammerhead} alt="image" className="projectImage" />
                                    <h6 className="projText">Designed and Programmed much of FRC 199's 2024 competitive robot</h6>
                                </div>
                                <div className="item">
                                    <h3>Custom Designed Robotic Arm</h3>
                                    <img src={projImg3} alt="image" className="projectImage" />
                                    <h6 className="projText">Designed, Programmed, Fabricated, and Wired an intelligent robotic arm, powered by Arduino</h6>
                                </div>
                                <div className="item">
                                    <h3>BHAC</h3>
                                    <img src={BHAC} alt="image" className="projectImage" />
                                    <h6 className="projText">Programmed a desktop application that routinely reminds you to do practices healthy in front of computers. Built with CustomTkinter</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}