import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

function About()
{
    let js = 60;
    let re = 95;
    let ps = 60;
    return(
        <section className="about-block block" id='about'>
            <Container fluid>
            <div className='title-holder'>
            <h2>ABOUT US</h2>
            <div className='subtitle'>- learn more about us -</div>
            </div>
            <Row>
                <Col sm={6}>
                <Image src={require('../assets/images/img1.jpg')}/>
                </Col>
                <Col sm={6}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
                    <div className='progress-block'>
                        <h4>HTML / CSS / JAVASCRIPT</h4>
                        <ProgressBar now={js} label={`${js}%`} />
                    </div>

                    <div className='progress-block'>
                        <h4>RESPONSIVE</h4>
                        <ProgressBar now={re} label={`${re}%`} />
                    </div>

                    <div className='progress-block'>
                        <h4>PHOTOSHOP</h4>
                        <ProgressBar now={ps} label={`${ps}%`} />
                    </div>
                </Col>
            </Row>   
            </Container>
        </section>
    )
}

export default About;