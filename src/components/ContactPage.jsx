import emailjs from '@emailjs/browser';
import { useState, useRef} from 'react';
import { Row, Col, Card, Form, Collapse, Alert, Button } from 'react-bootstrap';

export const ContactPage = () =>
{
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
    );
}