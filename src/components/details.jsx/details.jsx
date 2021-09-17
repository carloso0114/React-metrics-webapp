import NavBar from '../navBar/navBar';

const details = (props) => {
  const { data } = props;
  return (
    <div>
      <NavBar />
      <h1>{data[0]}</h1>
      <p>{data[1].source}</p>
    </div>
  );
};

export default details;
