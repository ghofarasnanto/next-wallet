import Image from "next/image";
import Avatar from "../../assets/img/logo.svg";
import styles from "../../../styles/CardHistory.module.css";

const CardHistory = () => {
  return (
    <div
      className={`row justify-content-between align-items-center ${styles.clickAble}`}
    >
      <div className="col-8">
        <div className="d-flex align-items-center justify-content-start gap-3">
          <Image src={Avatar} alt="avatarHistory" />
          <div className={`${styles.titleHistory}`}>
            <div>
              Samuel Suhi
              <p>Accept</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 text-end">
        <p>+Rp50.000</p>
      </div>
    </div>
  );
};

export default CardHistory;