import PropTypes from 'prop-types';
import { Item } from './Item';
import { ContactList } from './List.styled';

export const List = ({ contacts, handleDelete }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id}>
          {name}
          <span> {phone}</span>
          <button
            type="button"
            aria-label="delete contact"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </Item>
      ))}
    </ContactList>
  );
};

List.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
