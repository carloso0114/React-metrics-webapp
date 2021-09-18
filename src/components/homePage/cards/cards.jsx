import { CardBlock, StyledLink } from './styles';

const cards = (props) => {
  const { data } = props;
  return (
    <CardBlock className="col-6">
      <StyledLink to={`/${data[0].toLowerCase()}`}>{data[0].toUpperCase()}</StyledLink>
      <p>
        Cases confirmed:
        {' '}
        <span>{data[1].today_confirmed}</span>
      </p>
    </CardBlock>
  );
};

export default cards;
