import Image from "next/image";
import Ava from "../../assets/img/avanav.png";
import styles from "../../../styles/CardHistory.module.css";

const CardHistory = ({ image, firstName, lastName, type, amount }) => {
  const typeName =
    type === "send"
      ? "Transfer"
      : type === "topup"
      ? "Topup"
      : type === "accept"
      ? "Accept"
      : "";
  return (
    <div
      className={`d-flex flex-wrap justify-content-between align-items-center ${styles.clickAble}`}
    >
      <div className="col-8">
        <div className="d-flex align-items-center justify-content-start gap-3">
          <Image
            width={60}
            height={60}
            src={
              image ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${image}`
              : "/img/usernologin.png"
            }
            alt="avatarHistory"
          />
          <div className={`${styles.titleHistory}`}>
            <div className="fw-bold">
              {firstName + " " + lastName}
              <section className="fw-normal">{typeName}</section>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 text-end">
        <p
          className={
            type === "topup" || type === "send"
              ? styles.redColor
              : styles.greenColor
          }
        >{`${type === "send" ? "-" : "+"}Rp.${amount}`}</p>
      </div>
    </div>
  );
};

export default CardHistory;