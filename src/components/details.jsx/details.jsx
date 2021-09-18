import NavBar from '../navBar/navBar';
import {
  Card, Title, Info, Card2,
} from './styles';

const details = (props) => {
  const { data } = props;
  return (
    <div>
      <NavBar />
      <div>
        <Title className="text-end">{data[0]}</Title>
        <Card>
          Total deaths:
          <Info className="ms-auto">{data[1].today_deaths}</Info>
        </Card>
        <Card2>
          Today new deaths:
          {' '}
          <Info className="ms-auto">{data[1].today_new_deaths}</Info>
        </Card2>
        <Card>
          Today new confirmed cases:
          {' '}
          <Info className="ms-auto">{data[1].today_new_confirmed}</Info>
        </Card>
        <Card2>
          Total recovered:
          {' '}
          <Info className="ms-auto">{data[1].today_recovered}</Info>
        </Card2>
        <Card>
          Today new recovered:
          {' '}
          <Info className="ms-auto">{data[1].today_new_recovered}</Info>
        </Card>
        <Card2>
          Source of information:
          {' '}
          <Info className="ms-auto">{data[1].source}</Info>
        </Card2>
      </div>
    </div>
  );
};

export default details;
