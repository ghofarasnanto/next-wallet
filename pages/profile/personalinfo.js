import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../src/components/LoggedInLayout/index";

import { useRouter } from "next/router";

const PersonalInfo = () => {
  const router = useRouter();
  console.log(router);
  return (
    <LoggedinLayout title="Personal Info">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Personal Information</h3>
        <p className="mt-4">
          We got your personal information from the sign <br /> up proccess. If
          you want to make changes on <br />
          your information, contact our support.
        </p>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            First Name
            <section className="fw-bold mt-3">Ghofar</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            Last Name
            <section className="fw-bold mt-3">Asnanto</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            Verified E-mail
            <section className="fw-bold mt-3">ghofarwallet@gmail.com</section>
          </p>
        </div>
        <div
          className={`mb-3 d-flex justify-content-between align-items-center ${styles.cardDetails}`}
        >
          <p>
            Phone Number
            <section className="fw-bold mt-3">+62 8139 3677 7946</section>
          </p>
          <p className="text-primary mt-3">Manage</p>
        </div>
      </div>
    </LoggedinLayout>
  );
};

export default PersonalInfo;