import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import python from "../assets/img/python.png";
import java14 from "../assets/img/java.jpg";
import js from "../assets/img/JavaScript-logo.png";
import reactLogo from "../assets/img/react-1-logo-png-transparent.png";
import django from "../assets/img/django-icon.svg";
import cs from "../assets/img/images.png";
import asp from "../assets/img/NET_Core_Logo.svg.png";
import bootstrap from "../assets/img/Bootstrap_logo.svg.png";
import unity from "../assets/img/images (1).png";
import git from "../assets/img/Git_icon.svg.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import flask from "../assets/img/flask.png"
import onshape from "../assets/img/onshape.png";
import Firebase from "../assets/img/Firebase_icon.svg.png";
import wpilib from "../assets/img/wpilib.png";

export const Languages = () => {
    return (
        <section className="skill" id="languages">
            <Container>
                <Row>
                    <Col>
                        <div className="lang-bx">
                            <h2>
                                Languages + Technologies
                            </h2>
                            <p>A list of languages and technologies that I am confortable using</p>
                            <div className="inline-block">
                                <img src={python} alt="image" className="lImage"/>
                                <h5>Python</h5>
                            </div>
                            <div className="inline-block">
                                <img src={java14} alt="image" className="lImage"/>
                                <h5>Java</h5>
                            </div>
                            <div className="inline-block">
                                <img src={js} alt="image" className="lImage"/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="inline-block">
                                <img src={reactLogo} alt="image" className="lImage"/>
                                <h5>ReactJS</h5>
                            </div>
                            <div className="inline-block">
                                <img src={django} alt="image" className="lImage"/>
                                <h5>Django</h5>
                            </div>
                            <div className="inline-block">
                                <img src={cs} alt="image" className="lImage"/>
                                <h5>C#</h5>
                            </div>
                            <div className="inline-block">
                                <img src={asp} alt="image" className="lImage"/>
                                <h5>ASP.NET Core</h5>
                            </div>
                            <div className="inline-block">
                                <img src={bootstrap} alt="image" className="lImage"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="inline-block">
                                <img src={unity} alt="image" className="lImage"/>
                                <h5>Unity</h5>
                            </div>
                            <div className="inline-block">
                                <img src={git} alt="image" className="lImage"/>
                                <h5>Git</h5>
                            </div>
                            <div className="inline-block">
                                <img src={html} alt="image" className="lImage"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="inline-block">
                                <img src={css} alt="image" className="lImage"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="inline-block">
                                <img src={flask} alt="image" className="lImage"/>
                                <h5>Flask</h5>
                            </div>
                            <div className="inline-block">
                                <img src={wpilib} alt="image" className="lImage"/>
                                <h5>WPILib</h5>
                            </div>
                            <div className="inline-block">
                                <img src={Firebase} alt="image" className="lImage"/>
                                <h5>Firebase</h5>
                            </div>
                            <div className="inline-block">
                                <img src={onshape} alt="image" className="lImage"/>
                                <h5>Onshape</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}