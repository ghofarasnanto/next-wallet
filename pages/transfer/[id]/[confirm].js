import { PinInput } from "react-input-pin-code";
import { useState } from "react";

import LoginLayout from "../../../src/components/LoginLayout/index";
import styles from "../../../styles/Transfer.module.css";
import Image from "next/image";
import Success from "../../../src/assets/img/success.svg";
import Failed from "../../../src/assets/img/failed.svg";
import ModalTransfer from "../../../src/components/ModalTransfer";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getTransferDataAction } from "../../../src/redux/actionCreator/auth";
import { checkPinAxios } from "../../../src/modules/transfer";

const TransferConfirm = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [isMoved, setIsMoved] = useState(false);
  const [status, setStatus] = useState(false);
  const [isError, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const nominal = useSelector((state) => state.auth.nominal);
  const notes = useSelector((state) => state.auth.notes);
  const balance = useSelector((state) => state.auth.dataInfo.data?.balance);
  const receiverInfo = useSelector((state) => state.auth.receiverInfo);
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toUTCString().slice(0, 25);
  const newPin = values.join("");

  const handleTransfer = (e) => {
    e.preventDefault();
    const body = {
      receiverId: id,
      amount: Number(nominal),
      notes,
    };
    if (balance >= 0) {
      checkPinAxios(newPin, token)
        .then((res) => {
          dispatch(getTransferDataAction(body, token))
            .then((res) => {
              setError(false);
              setStatus(true);
              setIsMoved(true);
            })
            .catch((err) => {
              setStatus(true);
              setErrMsg(err.response?.data.msg);
              setError(true);
              setIsMoved(true);
            });
        })
        .catch((err) => {
          setErrMsg(err.response?.data.msg);
          setStatus(true);
          setError(true);
          setIsMoved(true);
        });
      setModal(false);
    }
  };

  return (
    <LoginLayout title="Transfer">
      <div className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <div className="row justify-content-center py-3">
          {status ? (
            <>
              {!isError ? (
                <div className="col-md-12 text-center">
                  <Image src={Success} alt="success" />
                  <h5>Transfer Success</h5>
                </div>
              ) : (
                <div className="col-md-12 text-center">
                  <Image src={Failed} alt="Failed" />
                  <h5>Transfer Failed</h5>
                  <p className="fw-bold text-danger">{`${errMsg}!`}</p>
                </div>
              )}
            </>
          ) : null}
        </div>
        {!isMoved ? (
          <div className="row px-2">
            <h5>Transfer Money</h5>
            <div className={`d-flex mt-2 gap-4 ${styles.cardTransfer}`}>
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
                  {receiverInfo
                    ? receiverInfo?.data.firstName +
                      " " +
                      receiverInfo?.data.lastName
                    : "-"}
                  <div className="fw-normal">
                    {receiverInfo ? receiverInfo?.data.noTelp : "-"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <h5 className="my-3">Details</h5>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <div>
            Amount
            <div className="fw-bold mt-2">{`Rp.${nominal}`}</div>
          </div>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <div>
            Balance Left
            <p className="fw-bold mt-2">{`Rp.${
              receiverInfo?.data.balance - nominal
            }`}</p>
          </div>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <div>
            Date & Time
            <p className="fw-bold mt-2">{today}</p>
          </div>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <div>
            Notes
            <p className="fw-bold mt-2">{notes}</p>
          </div>
        </div>
        {isMoved ? (
          <div className="row px-2">
            <h5>Transfer To</h5>
            <div className={`d-flex mb-3 gap-4 ${styles.cardTransfer}`}>
              <Image
                width={50}
                height={50}
                src={receiverInfo?.data.image
                  ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${receiverInfo?.data.image}`
                  : "/img/usernologin.png"
                }
                alt="avatarTransfer"
              />
              <div className={`${styles.titleTransfer}`}>
                <div className="fw-bold">
                  {receiverInfo?.data.firstName +
                    " " +
                    receiverInfo?.data.lastName}
                  <div className="fw-normal">
                    {receiverInfo?.data.noTelp}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {!status ? (
          <button
            onClick={() => {
              setModal(true);
            }}
            type="button"
            className={`btn btn-primary ${styles.buttonConfirm}`}
          >
            Confirm
          </button>
        ) : (
          <>
            {isError ? (
              <button
                onClick={() => {
                  router.push("/transfer");
                }}
                className={`btn btn-primary ${styles.buttonConfirm}`}
              >
                Try Again
              </button>
            ) : (
              <div className={`${styles.buttonError}`}>
                <button
                  className={`btn btn-light me-4 text-primary border border-1`}
                >
                  Download PDF
                </button>
                <button
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                  className={`btn btn-primary`}
                >
                  Back to Dashboard
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <ModalTransfer
      show={modal}
        id="exampleModal"
        title="Enter PIN to Transfer"
        desc="Enter your 6 digits PIN for confirmation to continue transferring money."
        button="Continue"
        click={handleTransfer}
        hide={() => {
          setModal(false);
        }}
      >
        <PinInput
          size="lg"
          placeholder="_"
          values={values}
          onChange={(value, idx, values) => {
            setValues(values);
          }}
        />
      </ModalTransfer>
    </LoginLayout>
  );
};

export default TransferConfirm;