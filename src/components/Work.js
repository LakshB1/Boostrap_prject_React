import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image  from "react-bootstrap/Image";
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
    {
      id: 1,
      link: 'https://www.google.com',
      image: require('../assets/images/img2.jpg'),
      title: 'Lonely Path',
      subtitle: 'Web Design'
    },
    {
      id: 2,
      link: 'https://www.google.com',
      image: require('../assets/images/img3.jpg'),
      title: 'Photographer Girl',
      subtitle: 'Branding'
    },
    {
      id: 3,
      link: 'https://www.google.com',
      image: require('../assets/images/img4.jpg'),
      title: 'The Difference',
      subtitle: 'Web Design'
    },
    {
      id: 4,
      link: 'https://www.google.com',
      image: require('../assets/images/img5.jpg'),
      title: 'Nature Patterns',
      subtitle: 'Branding'
    },
    {
      id: 5,
      link: 'https://www.google.com',
      image: require('../assets/images/img6.jpg'),
      title: 'The Difference',
      subtitle: 'Photography'
    },
    {
      id: 6,
      link: 'https://www.google.com',
      image: require('../assets/images/img7.jpg'),
      title: 'Winter Sonata',
      subtitle: 'Web Design'
    },
    {
      id: 7,
      link: 'https://www.google.com',
      image: require('../assets/images/img8.jpg'),
      title: 'Lonely Path',
      subtitle: 'Branding'
    },
    {
      id: 8,
      link: 'https://www.google.com',
      image: require('../assets/images/img9.jpg'),
      title: 'Appreciation',
      subtitle: 'Photography'
    },
    {
      id: 9,
      link: 'https://www.google.com',
      image: require('../assets/images/img2.jpg'),
      title: 'Happy Days',
      subtitle: 'Web Design'
    }
  ]

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) 
  {
    console.log(number);
    items.push(<Pagination.Item key={number} active = {number == active}>{number}</Pagination.Item>);
  }

function Work()
{
    return(
        
        <section className="works-block block">
            <Container>
                <div className="title-holder">
                    <h2>OUR WORKS</h2>
                    <div className="subtitle">
                    our awesome works
                    </div>
                    <Row className="portfoliolist">
                       {worksData.map((v,i)=>
                       {
                            return(
                                <Col sm={4}>
                                <div className="portfolio-wrapper">
                                    <Image src={v.image} />
                                    <div className="label text-center">
                                        <h3>{v.title}</h3>
                                        <p>{v.subtitle}</p>
                                    </div>
                                </div>
                            </Col>
                            )
                       })} 
                    </Row>
                    <Pagination>{items}</Pagination>
                </div>
            </Container>
        </section>
    )       
}

export default Work;