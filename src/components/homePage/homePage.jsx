import Cards from './cards/cards';

const homePage = (props) => {
  const { data } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((data) => (
          <Cards data={data} key={data[1].id} />
        ))}
      </div>
    </div>
  );
};

export default homePage;
