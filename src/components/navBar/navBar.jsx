import { Title, Nav, BackButton } from './styles';

const navBar = () => (
  <Nav className="navbar">
    <BackButton> &lt; Home</BackButton>
    <Title>COVID data by Countries</Title>
    <span>
      <i className="bi bi-mic-fill h4 me-4" />
      <i className="bi bi-gear-fill h4 me-4" />
    </span>
  </Nav>
);

export default navBar;
