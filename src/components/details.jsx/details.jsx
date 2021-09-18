import NavBar from '../navBar/navBar';
import { Info, Title } from './styles';

const details = (props) => {
  const { data } = props;
  return (
    <div>
      <NavBar />
      <div className="container-fluid text-center">
        <Title>{data[0]}</Title>
        <Info>
          Total deaths:
          {' '}
          {data[1].today_deaths}
        </Info>
        <Info>
          Today new deaths:
          {' '}
          {data[1].today_new_deaths}
        </Info>
        <Info>
          Today new confirmed cases:
          {' '}
          {data[1].today_new_confirmed}
        </Info>
        <Info>
          Total recovered:
          {' '}
          {data[1].today_recovered}
        </Info>
        <Info>
          Today new recovered:
          {' '}
          {data[1].today_new_recovered}
        </Info>
        <Info>
          Source of information:
          {' '}
          {data[1].source}
        </Info>
      </div>
    </div>
  );
};

export default details;
