import styles from "../../../styles/Modal.module.css";
import { Modal } from "react-bootstrap";
import { useRouter } from "next/router";

const ModalInput = ({
  show,
  hide,
  title,
  desc,
  children,
  button,
  handle,
  status,
  click,
}) => {
  const router = useRouter();
  return (
    <Modal show={show} onHide={hide} centered>
      <div className={`${styles.modalConfirm}`}>
        <Modal.Header closeButton className="border border-0">
          <b>{title}</b>
        </Modal.Header>
        <Modal.Body className="border border-0">
          <p>{desc}</p>
          <div className={`${styles.InputPin}`}>{children}</div>
        </Modal.Body>
        <Modal.Footer className="border border-0">
          {status ? (
            <></>
          ) : (
            <button
              type="button"
              onClick={router.query.confirm === "confirm" ? click : handle}
              className="btn btn-primary"
            >
              {button}
            </button>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ModalInput;