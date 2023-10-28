import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Image from "react-bootstrap/Image";

let teams = [
    {
        img : require('../assets/images/team1.jpg'),
        id : 1,
        name : "Gabriel Hart",
        post : "CEO",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        img : require('../assets/images/team2.jpg'),
        id : 2,
        name : "David Antony",
        post : "Manager",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
        
    },
    {
        img : require('../assets/images/team3.jpg'),
        id : 3,
        name : "Nicholas Perry",
        post : "UX Designer",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
        
    },
    {
        img : require('../assets/images/team4.jpg'),
        id : 4,
        name : "Sarah Wills",
        post : "Devloper",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        img : require('../assets/images/team5.jpg'),
        id : 5,
        name : "Sophia Pitt",
        post : "Devloper",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        img : require('../assets/images/team6.jpg'),
        id : 6,
        name : "Taylor Loper",
        post : "Devloper",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        img : require('../assets/images/team7.jpg'),
        id : 7,
        name : "Ryan Giggs",
        post : "Content Writer",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    },
    {
        img : require('../assets/images/team8.jpg'),
        id : 8,
        name : "David Smith",
        post : "SEO Expert",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores."
    }

]

function Teams()
{
    return(
        <section className="block teams-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>OUR TEAMS</h2>
                    <div className="subtitle">
                        some of our experts
                    </div>
                </div>
                <Row>
                {teams.map((v,i)=>
                {
                    return(
                        <Col sm={3}>
                            <div className="image">
                                <Image src={v.img}/>
                                <div className="overlay">
                                    <div className="socials">
                                    <ul>
                                        <li><a href="#facebook"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#twitter"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#facebook"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <h3>{v.name} </h3>
                                <span className="designation">{v.post}</span>
                                <p>{v.description}</p>
                            </div>
                        </Col>
                    )
                })}
                    </Row>
            </Container>
        </section>
    )
}

export default Teams;