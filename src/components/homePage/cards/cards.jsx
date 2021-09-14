const cards = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>{data[0]}</h1>
    </div>
  );
};

export default cards;
