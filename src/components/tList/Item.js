import { ContactItem } from './List.styled';

export const Item = ({ name, phone, onDelete }) => {
  return (
    <ContactItem>
      <span>{name}</span>
      <span> {phone}</span>
      <button type="button" aria-label="delete contact" onClick={onDelete}>
        Delete
      </button>
    </ContactItem>
  );
};
