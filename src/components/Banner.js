import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useState, useEffect } from 'react'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDel, setIsDel] = useState(false);
    const toRotate = [' Software Developer', " Mechanical Engineer", " Robotics Engineer"]
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text]);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDel ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDel) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDel && updatedText == fullText){
            setIsDel(true);
            setDelta(period);
        } else if(isDel && updatedText === ''){
            setIsDel(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Brandon Shen`}<span className="wrap">{text}</span></h1>
                        <p>A software and mechancial engineering enthusiast with a dying passion for robotics, aerospace, and machine learning.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}