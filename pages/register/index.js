import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';

//assets
import styles from "../../styles/Register.module.css";
import AuthSideLayout from "../../src/components/AuthLayout/Index";
import Lock from "../../src/assets/img/lockauth.png";
import Email from "../../src/assets/img/mail.png";
import Eye from "../../src/assets/img/eye-crossed.png";
import Person from "../../src/assets/img/person.png";
import Hide from "../../src/assets/img/hide.png";
import Show from "../../src/assets/img/show.png";

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

//Request Axios
// import { registerAxios } from "../../modules/auth";

//ReduxAction
import { registerAction } from "../../src/redux/actionCreator/auth";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errMsg, setErrMessage] = useState("");
  // const [successMsg, setSuccessMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [registered, setRegitered] = useState(false);
  const id = useSelector((state) => state.auth.dataId);
  const login = useSelector((state) => state.auth.isLoggedin);

  const handleRegister = (event) => {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(registerAction(body))
      .then((res) => {
        toast.success(res.value.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setSuccessMessage(res.value.data.msg);
        setRegitered(true);
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        // setErrMessage(err.response.data.msg);
        setRegitered(false);
      });
  };

  return (
    <AuthSideLayout title="Register">
      <div className={`${styles.contentRegister} col-md-6 col-12`}>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
        <h2>
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h2>
        <p className={`${styles.contentDesc} mt-md-4`}>
          Transfering money is eassier than ever, you can access FazzPay
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <form
          className={`${styles.contentForm} d-flex flex-column`}
          onSubmit={handleRegister}
        >
          <div className={styles.contentInput}>
            <Image src={Person} alt="firstName" />
            <input
              type="text"
              name="first"
              placeholder="Enter your firstname"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentInput}>
            <Image src={Person} alt="emailimg" />
            <input
              type="text"
              name="last"
              placeholder="Enter your lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentInput}>
            <Image src={Email} alt="emailimg" />
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentInput}>
            <Image src={Lock} alt="emailimg" />
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              placeholder="Create your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Image
              src={showPass ? Show : Hide}
              alt="eye"
              className={styles.eyeCrossed}
              onClick={() => {
                setShowPass(!showPass);
              }}
            />
          </div>
          {/* {login ? (
            <>
              <p className="text-center text-success mt-4 fw-bold">
                {`${successMsg}`}
              </p>
            </>
          ) : (
            <p className="text-center text-danger mt-4 fw-bold">{`${errMsg}`}</p>
          )} */}
          <button
            type={`${
              email && password && firstName && lastName ? "submit" : "button"
            }`}
            className={`${
              email && password && firstName && lastName
                ? styles.activeButton
                : styles.disableButton
            } btn mt-5`}
          >
            Sign Up
          </button>
          <p className="text-center mt-5">
            Already have an account? Let’s{" "}
            <span
              className={styles.loginLink}
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </AuthSideLayout>
  );
};

export default Register;