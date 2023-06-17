import Container from 'react-bootstrap/Container';
import { NavbarPage }  from "./components/NavbarPage";
import { HomePage } from './components/HomePage';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactPage } from "./components/ContactPage";

import "./App.css";

function App() {
  
  return (
      <Container id="intro" className="vh-100 bg-dark text-white" fluid>
        <NavbarPage />
        <HomePage />
        <PortfolioPage />
        <ContactPage />
      </Container>
  
  );
}
//  
export default App
