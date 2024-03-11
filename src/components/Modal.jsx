import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ isOpen, onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {isOpen && children}
    </dialog>,
    document.getElementById('modal')
  );
};

export { Modal };
