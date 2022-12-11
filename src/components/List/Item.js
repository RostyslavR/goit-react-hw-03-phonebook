import { ContactItem, Paragraf } from './List.styled';

export const Item = ({ name, phone, onDelete }) => {
  return (
    <ContactItem>
      <Paragraf>{name}</Paragraf>
      <Paragraf>{phone}</Paragraf>
      <button type="button" aria-label="delete contact" onClick={onDelete}>
        Delete
      </button>
    </ContactItem>
  );
};
