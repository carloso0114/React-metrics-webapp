import { DivBar, InputField, Label } from './styles';

const searchBar = (props) => {
  const { data } = props;
  const searchCountry = (e) => {
    const filteredDataList = data.filter((el) => (
      el[1].id.includes(e.target.value)
    ));
    console.log(filteredDataList);
  };
  return (
    <DivBar>
      <Label>Search by Country</Label>
      <InputField type="text" name="search" className="ms-2" placeholder="Enter country name" onChange={searchCountry} />
    </DivBar>
  );
};

export default searchBar;
