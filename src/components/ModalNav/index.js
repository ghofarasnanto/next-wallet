import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getProfileAction } from "../../redux/actionCreator/auth";

import styles from "../../../styles/Modal.module.css";

const ModalNav = ({ id, message, button, path }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const Userid = useSelector((state) => state.auth.dataLogin.id);
  const token = useSelector((state) => state.auth.dataLogin.token);
  return (
    <>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`${styles.modalConfirm} modal-content`}>
            <div className="modal-body border border-0">
              <h2 className="text-center">{message}</h2>
            </div>
            <div className="modal-footer justify-content-center border border-0">
              <button
                className="btn btn-primary"
                onClick={() => {
                  router.push(path);
                  dispatch(getProfileAction(Userid, token));
                }}
              >
                {button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNav;