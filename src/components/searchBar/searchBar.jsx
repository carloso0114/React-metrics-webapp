import { DivBar, InputField, Label } from './styles';

const searchBar = ({ value, handler }) => (
  <DivBar>
    <Label>Search by Country</Label>
    <InputField
      type="text"
      name="search"
      className="ms-2"
      placeholder="Enter country name"
      value={value}
      onChange={handler}
    />
  </DivBar>
);

export default searchBar;
