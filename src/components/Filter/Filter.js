import PropTypes from 'prop-types';
import { Label } from './FilterStyled.styled';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <Label>
      Find
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Enter something here"
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
