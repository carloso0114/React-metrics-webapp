import { CardBlock, CardtTitle } from './styles';

const cards = (props) => {
  const { data } = props;
  return (
    <CardBlock className="col-6">
      <CardtTitle>{data[0].toUpperCase()}</CardtTitle>
      <p>
        Today cases confirmed:
        {' '}
        <span>{data[1].today_confirmed}</span>
      </p>
    </CardBlock>
  );
};

export default cards;
