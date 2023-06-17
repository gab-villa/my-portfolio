import { TypeWriter } from './TypeWriter';
import { Row, Col, Button } from 'react-bootstrap';

export const HomePage = () =>
{
    return (
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
    );
}