import { Row, Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


export const PortfolioPage = () =>
{
    return (
        <Row id="Portfolio" className="bg-dark align-items-center justify-content-center text-center pt-5"> 
         
            <h5  className="pt-2">⚡ Some of my fave projects ⚡</h5>
          
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
    );
}