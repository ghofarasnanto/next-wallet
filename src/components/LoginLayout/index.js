import Image from "next/image";
import Head from "next/head";
import styles from "../../../styles/Loggedin.module.css";

import Ava from "../../assets/img/avanav.png";
import Bell from "../../assets/img/bell.png";
import Arrow from "../../assets/img/arrow-up.svg";
import Grid from "../../assets/img/griddisable.svg";
import Plus from "../../assets/img/plus.svg";
import Logout from "../../assets/img/log-out.svg";
import User from "../../assets/img/user.svg";
import ModalTopUp from "../ModalTopup";
import { useState } from "react";
import CardNotif from "../CardNotif";
import { useRouter } from "next/router";
import { topUpAction } from "../../redux/actionCreator/auth";
import { useSelector, useDispatch } from "react-redux";

const LoginLayout = ({ children, title, image }) => {
  const router = useRouter();
  const [dropdown, showDropdown] = useState(false);
  const [topUp, setTopUp] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const token = useSelector((state) => state.auth.dataLogin.token);
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  const redirectUrl = useSelector(
    (state) => state.auth.dataTopUp
  );
  const dispatch = useDispatch();

  const handleTopUp = (e) => {
    e.preventDefault();
    const body = {
      amount: topUp,
    };
    dispatch(topUpAction(body, token))
      .then((res) => {
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
      });
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.bgColor}>
        <header>
          <nav className={`${styles.navBar}`}>
            <div className="d-flex container justify-content-between py-5">
              <h3 className={styles.brandName}>FazzPay</h3>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <Image                   
                    src={image
                      ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${image}`
                      : "/img/usernologin.png"
                    }
                    alt="ava"
                    width={`50px`}
                    height={`50px`}
                    className={styles.clickAble}
                  />
                </div>
                <div className={`${styles.infoNav}`}>
                  <p className="fw-bold">{dataInfo.data.firstName + " " + dataInfo.data.lastName}</p>
                  <p>{dataInfo.data.noTelp}</p>
                </div>
                <div className="position-relative">
                  <Image
                    src={Bell}
                    alt="bell"
                    className={styles.clickAble}
                    onClick={() => {
                      showDropdown(!dropdown);
                    }}
                  />
                  {dropdown ? (
                    <div className={`${styles.dropdown}`}>
                      <CardNotif />
                     
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className={`${styles.main}`}>
          <div className="container d-flex flex-column flex-md-row gap-5 my-5">
            <div className={`col-md-3 col-12 text-center ${styles.navMain}`}>
              <div className="d-flex flex-row flex-md-column justify-content-between ">
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Grid} alt="home" />
                  <button
                    onClick={() => {
                      router.push("/dashboard");
                    }}
                    className={`${false ? styles.activeNav : styles.disableNav
                      }`}
                  >
                    Dashboard
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Arrow} alt="transfer" />
                  <button
                  onClick={() => {
                    router.push("/transfer");
                  }}
                    className={`${false ? styles.activeNav : styles.disableNav
                      }`}
                  >
                    Transfer
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Plus} alt="topup" />
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#topUpModal"
                    className={`${false ? styles.activeNav : styles.disableNav
                      }`}
                  >
                    Top Up
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={User} alt="profile" />
                  <button
                    onClick={() => {
                      router.push("/profile");
                    }}
                    className={`${false ? styles.activeNav : styles.disableNav
                      }`}
                  >
                    Profile
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.logout}`}
                >
                  <Image src={Logout} alt="logout" />
                  <button
                    className={`${false ? styles.activeNav : styles.disableNav
                      }`}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            {children}
          </div>
        </main>
        <footer className={`${styles.footer}`}>
          <div className="d-flex container justify-content-between py-5 text-white">
            <p>2022 FazzPay. All right reserved.</p>
            <div className="d-flex gap-3">
              <p>2022 FazzPay. All right reserved.</p>
              <p>contact@FazzPay.com</p>
            </div>
          </div>
        </footer>
      </div>
      <ModalTopUp
        id="topUpModal"
        title="Topup"
        desc="Enter the amount of money, and click submit"
        button="Submit"
        handle={handleTopUp}
        status={isSuccess}
      >
        {!isSuccess ? (   
          <input
          type="number"
          name="topup"
          className={styles.inputTopup}
          placeholder="_______________________________________"
          value={topUp}
          onChange={(e) => {
            setTopUp(e.target.value);
          }}
        />                         
        ) : (
          <div
              // onClick={() => {
              //   router.replace(redirectUrl);
              // }}
              className={`${styles.buttonURL} btn btn-primary`}
            >
              <a
                className="text-white text-decoration-none"
                href={redirectUrl.data.redirectUrl}
                target="_blank"
                rel="noreferrer"
              >
                Pay Top Up
              </a>
            </div>    
        )}
      </ModalTopUp>
    </>
  );
};

export default LoginLayout;