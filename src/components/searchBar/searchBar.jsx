/* eslint-disable no-unused-vars */
import { DivBar, InputField, Label } from './styles';

const searchBar = () => (
  <DivBar>
    <Label>Search by Country</Label>
    <InputField className="ms-2" placeholder="Enter country name" />
  </DivBar>
);

export default searchBar;
