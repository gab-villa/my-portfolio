import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const ProjectCard = ({children, header, body, imgSrc}) =>
{
    return (
    <Card className="mx-4" border="info" bg="dark" >
        {children}
        <Card.Img as="img" className="filter-cyan p-4" src={imgSrc}  variant="top" />
        <h5>{header}</h5>
            <Card.Body className="pt-0">
                <Card.Text>
                  {body}
                </Card.Text>
            <p>
                <img className="mx-1" width="30" height="30" src="react-color.svg" />
                <img className="mx-1"  width="25" height="25" src="javascript-color.svg" />
                <img className="mx-1"  width="30" height="30" src="bootstrap-color.svg" />
            </p>
            <Button variant="primary">Go</Button>
        </Card.Body>
    </Card>
    );
}