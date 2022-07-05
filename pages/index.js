import Image from 'next/image'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

//Assets
import Call from "../src/assets/img/phone.png";
import Lock from "../src/assets/img/lock.png";
import Download from "../src/assets/img/download.png";
import Air from "../src/assets/img/air.png";
import Canon from "../src/assets/img/canon.png";
import Dell from "../src/assets/img/dell.png";
import Drop from "../src/assets/img/drop.png";
import Hm from "../src/assets/img/hm.png";
import Micro from "../src/assets/img/micro.png";
import Smp from "../src/assets/img/smp.png";
import Left from "../src/assets/img/left.png";
import Right from "../src/assets/img/right.png";
import Profile from "../src/assets/img/1.png";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={`text-center`}>
        <div className={`${styles.header}`}>
          <Header />          
          <div className={`row text-center text-white justify-content-center`}>
            <h1 className={styles.headerTitle}>
              Awesome App <br />
              For Saving Time.
            </h1>
            <p className="pt-md-4">
              We bring you a mobile app for banking problems that oftenly <br />
              wasting much of your times.
            </p>
            <button className={`${styles.tryButton} col-1 btn btn-light fw-bold`}>
              Try it Free
            </button>
          </div>
        </div>
        <div className={styles.support}>
          <h1 className={`${styles.secondHeader}`}>
            <section className={styles.sectionHeader}>Why</section> Choose
            FazzPay?
          </h1>
          <p className="pt-3 fw-400">
            We have some great features from the application and it’s totally{" "}
            <br />
            free to use by all users around the world.
          </p>
          <div className="row justify-content-center bg-white mt-4">
            <div className="col-md-3 p-3">
              <Image src={Call} alt="callimage" />
              <p>24/7 Support</p>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="col-md-3 bg-white p-3 rounded">
              <Image src={Lock} alt="callimage" />
              <p>24/7 Support</p>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="col-md-3 bg-white p-3">
              <Image src={Download} alt="callimage" />
              <p>24/7 Support</p>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.thirdRow}`}>
          <div className="col-md-1">
            <Image src={Micro} alt="micro" />
          </div>
          <div className="col-md-1">
            <Image src={Drop} alt="micro" />
          </div>
          <div className="col-md-1">
            <Image src={Hm} alt="micro" />
          </div>
          <div className="col-md-1">
            <Image src={Air} alt="micro" />
          </div>
          <div className="col-md-1">
            <Image src={Canon} alt="micro" />
          </div>
          <div className="col-md-1">
            <Image src={Dell} alt="micro" />
          </div>
        </div>
        <div className={`${styles.fourthRow}`}>
          <h1 className={styles.price}>Rp. 390.736.500</h1>
          <h1 className={`${styles.thirdHeader} mt-3`}>
            <section className={styles.sectionHeader}>Money</section> has Been
            Transfered.
          </h1>
          <p className="mt-5">
            That amount of money has been transfered from all users. <br />
            We still counting and going strong!
          </p>
        </div>
        <div className={`${styles.fifthRow} d-flex`}>
          <div className="col-5">
            <Image src={Smp} alt="imgSMP" />
          </div>
          <div className="col-7 mt-5">
            <h1 className={`${styles.fourthHeader}`}>
              All The
              <section className={styles.sectionHeader}> Great</section> <br />
              FazzPay Features.
            </h1>
            <div
              className={`card border border-0 mt-4 text-start p-3 w-75 rounded-4 ${styles.cardRound}`}
            >
              <div className="title-card">
                <p className="fw-bold">
                  <span className="me-2">1.</span> Small Fee
                </p>
                <p>
                  We only charge 5% of every success transaction done in FazzPay
                  app.
                </p>
              </div>
            </div>
            <div
              className={`card border border-0 mt-4 text-start p-3 w-75 rounded-4 ${styles.cardRound}`}
            >
              <div className="title-card">
                <p className="fw-bold">
                  <span className="me-2">2.</span> Data Secured
                </p>
                <p>
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
            </div>
            <div
              className={`card border border-0 mt-4 text-start p-3 w-75 rounded-4 ${styles.cardRound}`}
            >
              <div className="title-card">
                <p className="fw-bold">
                  <span className="me-2">3.</span> User Friendly
                </p>
                <p>
                  FazzPay come up with modern and sleek design and not
                  complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sixthRow}`}>
          <h1 className={`${styles.fifthHeader}`}>
            What Users are
            <section className={styles.sectionHeader}> Saying.</section>
          </h1>
          <p className="mt-5">
            We have some great features from the application and it’s totally{" "}
            <br />
            free to use by all users around the world.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className={styles.arrowLeft}>
              <Image src={Left} alt="left" />
            </div>
            <div
              className={`${styles.cardAva} card p-5 border border-0 mx-3 rounded-5`}
            >
              <div className="image-avatar">
                <Image src={Profile} alt="profile" />
              </div>
              <div className="card-title">
                <h2>Alex Hansinburg</h2>
                <p>Designer</p>
                <p className="mt-4">
                  “This is the most outstanding app that I’ve ever try in my
                  live, this app is such an amazing masterpiece and it’s
                  suitable for you who is bussy with their bussiness and must
                  transfer money to another person aut there. Just try this app
                  and see the power!”
                </p>
              </div>
            </div>
            <div className={styles.arrowRight}>
              <Image src={Right} alt="right" />
            </div>
          </div>
        </div>
        <Footer />        
      </div>
    </>
  );
}