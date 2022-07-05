import styles from "../../styles/Profile.module.css";
import LoginLayout from "../../src/components/LoginLayout/index";
import { useState } from "react";
import Image from "next/image";
import Call from "../../src/assets/img/phone.svg";

const EditPhone = () => {
  const [phone, setPhone] = useState("");
  return (
    <LoginLayout title="Change Password">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Edit Phone Number</h3>
        <p className="mt-4">
          Add at least one phone number for the transfer <br /> ID so you can
          start transfering your money to <br /> another user.
        </p>
        <form
          // onSubmit={match ? hanldeChangePin : handleMatchPin}
          className={`${styles.contentForm} d-flex flex-column justify-content-center align-items-center `}
        >
          <div className={`col-12 ${styles.contentInputPhone}`}>
            <Image src={Call} alt="passimg" />
            <span className={styles.spanInput}>+62</span>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <button
            type={`${phone ? "submit" : "button"}`}
            className={`${
              phone ? styles.activeButton : styles.disableButton
            } btn mt-5`}
          >
            Edit Phone Number
          </button>
        </form>
      </div>
    </LoginLayout>
  );
};

export default EditPhone;