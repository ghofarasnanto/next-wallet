import LoginLayout from "../../src/components/LoginLayout/index";
import styles from "../../styles/Transfer.module.css";
import Image from "next/image";
import Avatar from "../../src/assets/img/logo.svg";
import Pencil from "../../src/assets/img/Vector.png";
import { useRouter } from "next/router";
import { getProfileByIdAxios } from "../../src/modules/auth";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNominalAction,
  setNotesAction,
  getReceiverAction,
} from "../../src/redux/actionCreator/auth";

const TransferId = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const balance = useSelector((state) => state.auth.dataInfo?.balance);
  const receiverInfo = useSelector((state) => state.auth.receiverInfo);
  const { id } = router.query;

  useEffect(() => {
    dispatch(getReceiverAction(id, token));
    getProfileByIdAxios(id, token)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
      });
  }, [id, token, dispatch]);

  return (
    <LoginLayout title="Transfer">
      <form className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <h5>Transfer Money</h5>
        <div className={`d-flex mt-4 gap-4 ${styles.cardTransfer}`}>
          <Image
            width={50}
            height={50}
            src={receiverInfo?.data.image
              ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${receiverInfo?.data.image}`
              : "/img/usernologin.png"
            }
            alt="ImgTransfer"
          />
          <div className={`${styles.titleTransfer}`}>
            <div className="fw-bold">
              {receiverInfo?.data.firstName && receiverInfo?.data.lastName !== undefined
                ? receiverInfo?.data.firstName + " " + receiverInfo?.data.lastName
                : ""}
              <section>{receiverInfo?.data.noTelp !== undefined ? receiverInfo?.data.noTelp : ""}</section>
            </div>
          </div>
        </div>
        <p className={`mt-5 ${styles.descTransfer}`}>
          Type the amount you want to transfer and then <br /> press continue to
          the next steps.
        </p>
        <div className="row justify-content-center mt-5">
          <div className="col-6 col-md-12">
            <input
              type="number"
              className={`${styles.nominal}`}
              placeholder="0.00"
              onChange={(e) => {
                dispatch(setNominalAction(Number(e.target.value)));
              }}
            />
          </div>
          <p className="text-center mt-4 fw-bold">
            {`Rp. ${receiverInfo?.data.balance} Available`}
          </p>
        </div>
        <div className="row justifiy-items-center">
          <div className={`col-8 col-md-4 ${styles.notes}`}>
            <Image
              width={25}
              height={25}
              src={Pencil}
              alt="avatarTransfer"
            />
            <input
              type="text"
              // name="notes"
              className={`${styles.notesInput}`}
              placeholder="Add a payment for"
              onChange={(e) => {
                dispatch(setNotesAction(e.target.value));
              }}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            router.push(`/transfer/${id}/confirm`);
          }}
          className={`btn btn-primary ${styles.buttonConfirmTransfer}`}
        >
          Continue
        </button>
      </form>
    </LoginLayout>
  );
};

export default TransferId;