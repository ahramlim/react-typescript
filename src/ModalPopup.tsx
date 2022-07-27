import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./ModalPopup.module.scss";

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  onClick?: () => void;
}
Modal.setAppElement('#root');
export const ModalPopup = ({ isOpen, title }: ModalProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {};
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				ariaHideApp={modalIsOpen}
      >
        <h2 className={styles.getModalTitle}>{title}</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};
