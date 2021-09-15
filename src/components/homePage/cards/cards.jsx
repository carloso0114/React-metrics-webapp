const cards = (props) => {
  const { data } = props;
  return (
    <div className="col-6">
      <h1>{data[0].toUpperCase()}</h1>
      <p>
        Today cases confirmed:
        {' '}
        <span>{data[1].today_confirmed}</span>
      </p>
    </div>
  );
};

export default cards;
