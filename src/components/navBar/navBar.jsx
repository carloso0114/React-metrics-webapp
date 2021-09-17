import { Title, Nav, StyledLink } from './styles';

const navBar = () => (
  <Nav className="navbar">
    <StyledLink to="/"> &lt; Home</StyledLink>
    <Title>COVID Analitycs Data</Title>
    <span>
      <i className="bi bi-mic-fill h4 me-3" />
      <i className="bi bi-gear-fill h4" />
    </span>
  </Nav>
);

export default navBar;
