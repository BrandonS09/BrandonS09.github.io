import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/img/color-sharp.png";
import BHAC from "../assets/img/BHAC.png";
import Hammerhead from "../assets/img/199.jpg";
import foodAmendment from "../assets/img/food amendment.jpg";
import porfolio from "../assets/img/portf.png";
import arm from "../assets/img/arm.png";
import f1maps from "../assets/img/f1maps.png"

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
                            <p>A collection of my more notable projects, my other projects can be found at my <a href="https://github.com/BrandonS09" target="_blank">Github</a></p>
                            <Carousel responsive={responsive} infinite={true} className="project-slider">
                                <div className="item">
                                    <h3>FRC 199 2024 Robot</h3>
                                    <img src={Hammerhead} alt="image" className="projectImage" />
                                    <h6 className="projText">Designed and Programmed much of FRC 199's 2024 competitive robot</h6>
                                </div>
                                <div className="item">
                                    <h3>F1 Maps</h3>
                                    <img src={f1maps} alt="image" className="projectImage" />
                                    <h6 className="projText">Programmed a google maps clone that features the f1 cast and is f1 themed</h6>
                                </div>
                                <div className="item">
                                    <h3>BHAC</h3>
                                    <img src={BHAC} alt="image" className="projectImage" />
                                    <h6 className="projText">Programmed a desktop application that routinely reminds you to do practices healthy in front of computers. Built with CustomTkinter</h6>
                                </div>
                                <div className="item">
                                    <h3>The Food Amendment</h3>
                                    <img src={foodAmendment} alt="image" className="projectImage" />
                                    <h6 className="projText">CruzHacks project which is a website that utilizes AI to generate dietary plans based on your goals. Built with React, OpenAI API, and Firebase</h6>
                                </div>
                                <div className="item">
                                    <h3>Portfolio Website</h3>
                                    <img src={porfolio} alt="image" className="projectImage" />
                                    <h6 className="projText">This very website which showcases my skills. Built with React</h6>
                                </div>
                                <div className="item">
                                    <h3>Custom Designed Robotic Arm</h3>
                                    <img src={arm} alt="image" className="projectImage" />
                                    <h6 className="projText">Designed, Programmed, Fabricated, and Wired an intelligent robotic arm, powered by Arduino</h6>
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