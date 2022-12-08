import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      <button onClick={onClose}>Close</button>
      <div>{children}</div>
    </Modal>
  );
};
