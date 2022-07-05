import UserNoLogin from "../../assets/img/usernologin.png";
import Image from "next/image";
import styles from "../../../styles/CardTransfer.module.css";
import { useRouter } from "next/router";
// const API_NEXT_CLOUDINARY  = `https://res.cloudinary.com/user/profile/[id]`

const CardTransfer = ({ image, firstname, lastname, noTelp, id }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/transfer/${id}`);
      }}
      className={`d-flex mt-4 gap-4 ${styles.cardTransfer}`}>
      <Image width='50px'
        height='50px'
        src={image ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${image}`
          : "/img/usernologin.png"}
      />
      <div className={`${styles.titleTransfer}`}>
        <div>
          {firstname + " " + lastname}
          <section>{noTelp}</section>
        </div>
      </div>
    </div>
  );
};

export default CardTransfer;