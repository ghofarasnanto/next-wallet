import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

//Layout
import AuthSideLayout from "../../src/components/AuthLayout/";

//ReduxAction
import { loginAction } from "../../src/redux/actionCreator/auth";

//assets
import styles from "../../styles/Login.module.css";
import Lock from "../../src/assets/img/lockauth.png";
import Email from "../../src/assets/img/mail.png";
import Hide from "../../src/assets/img/hide.png";
import Show from "../../src/assets/img/show.png";
import ModalNav from "../../src/components/ModalNav";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMessage] = useState("");
  const [successMsg, setSuccessMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState(false);

  const pin = useSelector((state) => state.auth.dataLogin.pin);

  const handleLogin = (event) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    dispatch(loginAction(body))
      .then((res) => {
        setSuccessMessage(res.value.data.msg);
        setLogin(true);
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
        setErrMessage(err.response.data.msg);
        setLogin(false);
      });
  };
  return (
    <AuthSideLayout title="Login">
      <div className={`${styles.contentLogin} col-md-6`}>     
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
        <p className={`${styles.contentDesc} mt-md-5`}>
          Transfering money is eassier than ever, you can access FazzPay
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <form
          className={`${styles.contentForm} d-flex flex-column`}
          onSubmit={handleLogin}
        >
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
            <Image src={Lock} alt="passimg" />
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Image
              onClick={() => {
                setShowPass(!showPass);
              }}
              src={showPass ? Show : Hide}
              alt="eye"
              className={styles.eyeCrossed}
            />
          </div>
          <p
            onClick={() => {
              router.push("/forgot-password");
            }}
            className={`${styles.forgotPass} text-end mt-3`}
          >
            Forgot password?
          </p>          
          <button
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            type="submit"
            className={`${
              email && password ? styles.activeButton : styles.disableButton
            } btn mt-5`}
          >
            Login
          </button>
          <p className="text-center mt-5">
            Don’t have an account? Let’s{" "}
            <span
              className={styles.registerLink}
              onClick={() => {
                router.push("/register");
              }}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>    
      {login ? (
        <ModalNav
          id="loginModal"
          message={successMsg}
          path={pin === null ? "/pin" : "/dashboard"}
          button={pin === null ? "Create PIN" : "Go to Dashboard"}          
        />
      ) : null}
    </AuthSideLayout>
  );
}

export default Login;