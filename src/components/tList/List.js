import PropTypes from 'prop-types';
import { Item } from './Item';
import { ContactList } from './List.styled';

export const List = ({ contacts, handleDelete }) => {
  return (
    <ContactList>
      {contacts.map(({ id, ...other }) => (
        <li key={id}>
          <Item {...other} onDelete={() => handleDelete(id)} />
        </li>
      ))}
    </ContactList>
  );
};

List.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
