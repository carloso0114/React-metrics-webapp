import Cards from './cards/cards';

const homePage = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>Countries</h1>
      {data.map((data) => (
        <Cards data={data} key={data.id} />
      ))}
    </div>
  );
};

export default homePage;
