import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Collapse from 'react-bootstrap/Collapse'
import { TypeWriter } from './components/TypeWriter';
import { ProjectCard } from './components/ProjectCard';
import { useState, useRef} from 'react';
import { Form } from 'react-bootstrap';


import "./App.css";

import emailjs from '@emailjs/browser';


function App() {
  const [formStatus, setFormStatus] = useState("init");
  const [replyStatus, setReplyStatus] = useState("init");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(function() {
          setFormStatus("typing");
    }, 4000);
    emailjs.sendForm('service_3z3rwhm', 'template_93tntyl', form.current, 'JtxBv3vrjZitx3Va3')
          .then(() => {
            setReplyStatus("OK");
          }, () => {
              setReplyStatus("ERROR");
          });
  };
  return (
    <>
      <Container id="intro" className="vh-100 bg-dark text-white" fluid>
        
        <Navbar className="px-5 " expand="sm" fixed="top" bg="dark" variant="dark">
            
            <Navbar.Brand className="">
              GV
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav navbarScroll className="my-0 w-100 justify-content-center">
            <Nav.Item className="mx-1">
                <Nav.Link href="#Home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-1">
                <Nav.Link href="#Portfolio">
                  Portfolio
                </Nav.Link>
              </Nav.Item >
              <Nav.Item className="mx-1">
                <Nav.Link href="#Contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
              
            </Nav>
            <a href="https://www.linkedin.com/in/gabriel-villa-47a04a1a5/" target="_blank">
            <img className="my-2 my-sm-0 mx-2 filter-dark-mode" src="linkedin.svg" width="25" height="25"/>
            </a>
            <a href="https://github.com/gab-villa" target="_blank">
            <img className="my-2 my-sm-0 mx-2 filter-dark-mode" src="github.svg" width="25" height="25"/>
            </a>

            </Navbar.Collapse>
              
          </Navbar>
      
        <Row id="Home" className="align-items-center justify-content-center text-center mx-0 h-100">
            <Col className="px-0">
                <h1 id="Home" >
                <TypeWriter text="Hello, I'm Gabriel"/>
                </h1>
                  <p className="lead">
                    Computer science student from Argentina.
                  </p>
              <div>
                <p>
                <img className="mx-1" width="30" height="30" src="react-color.svg" />
                <img className="mx-1"  width="25" height="25" src="javascript-color.svg" />
                <img className="mx-1"  width="25" height="25" src="npm.svg" />
                <img className="mx-1"  width="30" height="30" src="bootstrap-color.svg" />
                
                
                <img className="mx-1"  width="30" height="30" src="java-icon.svg" />
                <img className="mx-1"  width="25" height="25" src="cplusplus-color.svg" />
                <img className="mx-1"  width="30" height="30" src="microsoftoffice-color.svg" />
                <img className="mx-1"  width="30" height="30" src="sql.png" />
                <img className="mx-1"  width="25" height="25" src="python.svg" />
                </p>
                <Button variant="primary" href="/cv-gab-villa.pdf" download> Download CV</Button>
                    
              </div>
            </Col>
          </Row>
          
          <Row id="Portfolio" className="bg-dark align-items-center justify-content-center text-center pt-5"> 
         
            <h5  className="pt-2">⚡ Some of my faves projects ⚡</h5>
          
            <Col xs={{span:8}} sm={{span:8}}  md={{span:5}} lg={{span:4}} xl={{span:3}} className="py-3 px-0">
              <ProjectCard
                hrefView="https://leaked-password-checker.vercel.app/" 
                hrefRepo="https://github.com/gab-villa/leaked-password-checker"
                imgSrc="shield-exclamation.svg" 
                header="PasswordTester" 
                body="Is your password secure? Check it with this web tool!" 
              >
                <img className="mx-1" width="30" height="30" src="react-color.svg" />
                <img className="mx-1"  width="25" height="25" src="javascript-color.svg" />
                <img className="mx-1"  width="30" height="30" src="bootstrap-color.svg" />
              </ProjectCard>
            </Col>
            <Col xs={{span:8}} sm={{span:8}} md={{span:5}} lg={{span:4}} xl={{span:3}} className="py-3 px-0">
              <ProjectCard 
                hrefView="https://web-time-machine.vercel.app/"
                hrefRepo="https://github.com/gab-villa/web-time-machine"
                imgSrc="./hourglass.svg" 
                header="WebTimeMachine" 
                body="Back to the begginings of the web!"
              >
                <img className="mx-1" width="30" height="30" src="react-color.svg" />
                <img className="mx-1"  width="25" height="25" src="javascript-color.svg" />
                <img className="mx-1"  width="30" height="30" src="bootstrap-color.svg" />
              </ProjectCard>
            </Col>
            <Col xs={{span:8}} sm={{span:8}} md={{span:5}} lg={{span:4}} xl={{span:3}} className="py-3 px-0">
              <ProjectCard
              hrefView="http://vocabulary-builder-react.vercel.app/" 
              hrefRepo="https://github.com/gab-villa/vocabulary-builder-react"
              imgSrc="patch-question.svg" 
              header="Vocabulary quiz" 
              body="Test your english level with this simple game quiz">
                <img className="mx-1" width="30" height="30" src="react-color.svg" />
                <img className="mx-1"  width="25" height="25" src="javascript-color.svg" />
                <img className="mx-1"  width="30" height="30" src="bootstrap-color.svg" />
              </ProjectCard>
            </Col>

            <Col xs={{span:8}} sm={{span:8}} md={{span:5}} lg={{span:4}} xl={{span:3}} className="py-3 px-0">
              <ProjectCard
              hrefView="#" 
              hrefRepo="https://github.com/gab-villa/sistema-de-reclamos"
              imgSrc="database.svg" 
              header="Claim system" 
              body="An information system to manage claims">
                <img className="mx-1" width="30" height="30" src="access.svg" />
                <img className="mx-1" width="30" height="30" src="sql.png" />
                <img className="mx-1" width="30" height="30" src="vba.png" />
              </ProjectCard>
            </Col>
           
          </Row>
          <Row id="Contact" className="bg-dark align-items-center justify-content-center h-100 pt-5"> 
            <Col sm={{span:10, order:1}} md={{span:8, order:1}} lg={{span:6, order:1}}>
            <Card border="info" bg="dark">
            <Card.Header>Get in touch with me </Card.Header>
            <Card.Body>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  disabled={formStatus == "submitting"}
                  name="user_name" 
                  required 
                  placeholder="John Doe" 
                />
                </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                
                <Form.Label>Email address</Form.Label>
                <Form.Control
               disabled={formStatus == "submitting"}
                  name="user_email" 
                  required 
                  type="email" 
                  placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  disabled={formStatus == "submitting"}
                  name="message" 
                  as="textarea" 
                  rows={3} 
                />
              </Form.Group>
              <Button 
                disabled={formStatus == "submitting"}
                type="submit">
                  Send now
              </Button>
            </Form>
            </Card.Body>
            <Card.Footer> 
              <Collapse in={replyStatus != "init" && 
                            formStatus != "submitting"}>
                <div>
              <Alert className="text-center" variant={replyStatus == "OK" ? "success" : "danger"}>
                
                {replyStatus == "OK" ? "Email sent successfully!":"Something went wrong.."}
              </Alert>
              </div>
              </Collapse>
            </Card.Footer>
            
            </Card>
            </Col>
          </Row>
      </Container>
      </>
  );
}
//  
export default App
