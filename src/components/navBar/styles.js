import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  font-size: 1rem;
  background-color: #4369B2;
  padding: 5px 5px 5px 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
