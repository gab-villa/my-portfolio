import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { TypeWriter } from './components/TypeWriter';
import Fade from 'react-bootstrap/Fade';
import { ProjectCard } from './components/ProjectCard';
import { useState } from 'react';
import "./App.css";

function App() {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <>
      <Container id="intro" className="vh-100 bg-dark text-white" fluid>
        
        <Navbar className="mx-auto" fixed="top" bg="dark" variant="dark">
            <Container className="" fluid>
             <Row className="justify-content-center w-100">
              <Col sm={2}>
                <h3>GV</h3>
              </Col>
              <Col sm={6}>
              <Nav className="float-end">
            <Nav.Item>
                <Nav.Link href="#Home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Portfolio">
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item href="#Contact">
                <Nav.Link >
                  Contact
                </Nav.Link>
              </Nav.Item>
              
            </Nav>
              </Col>
             </Row>
            
            </Container>
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
                <img className="mx-1" width="30" height="30" src="react-color.svg" />
                <img className="mx-1"  width="25" height="25" src="javascript-color.svg" />
                <img className="mx-1"  width="30" height="30" src="bootstrap-color.svg" />
               
                
                <img className="mx-1"  width="30" height="30" src="java-icon.svg" />
                <img className="mx-1"  width="25" height="25" src="cplusplus-color.svg" />
                <img className="mx-1"  width="30" height="30" src="microsoftoffice-color.svg" />
              </div>
            </Col>
          </Row>
          
          <Row id="Portfolio" className="bg-dark align-items-center justify-content-center text-center h-100 pt-5"> 
            <h5 >Some of my most recent projects</h5>
            <Col sm={{span:4, order:1}}className="px-0">
              <ProjectCard imgSrc="shield-exclamation.svg" header="PasswordTester" body="Is your password secure? Check it with this web tool!" />
            </Col>
            <Col sm={{span:4, order:2}}className="px-0">
              <ProjectCard imgSrc="./hourglass.svg" header="WebTimeMachine" body="Back to the begginings of the web!"/>
            </Col>
            <Col sm={{span:4, order:3}}className="px-0">
              <ProjectCard imgSrc="patch-question.svg" header="Vocabulary quiz" body="Test your english level with this simple game quiz"/>
            </Col>
           
          </Row>
          <Row id="Portfolio" className="bg-dark align-items-center justify-content-center text-center h-100 pt-5"> 
            <h5 >Contact</h5>
           
          </Row>
      </Container>
      </>
  );
}

export default App
