import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { HeartPulseFill } from 'react-bootstrap-icons';
export const ProjectCard = ({children, header, body, imgSrc, hrefRepo, hrefView}) =>
{
    return (
    <Card className="mx-4" border="info" bg="dark" >
      
        <Card.Img as="img" className="filter-cyan p-4 d-none d-md-block" src={imgSrc}  variant="top" />
        <Card.Title className="h5 mt-3" >{header}</Card.Title>
            <Card.Body className="pt-0">
                <Card.Text>
                  {body}
                </Card.Text>
            <p>
                {children}
                
            </p>
            <Button className="mx-2" target="_blank" href={hrefRepo} variant="primary">Repo</Button>
            <Button className="mx-2" target="_blank" href={hrefView} variant="primary">Go</Button>
        </Card.Body>
    </Card>
    );
}