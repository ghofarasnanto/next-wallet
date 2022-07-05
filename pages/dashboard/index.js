import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import ArrowGreen from "../../src/assets/img/arrow-green.svg";
import ArrowRed from "../../src/assets/img/arrow-red.svg";
import Arrow from "../../src/assets/img/arrow-up.svg";
import Plus from "../../src/assets/img/plus.svg";
import LoginLayout from "../../src/components/LoginLayout/index";
import CardHistory from "../../src/components/CardHistory/index";
import { getProfileAction } from "../../src/redux/actionCreator/auth";
import { getHistoriesLimit } from "../../src/modules/history";
import styles from "../../styles/DashBoard.module.css";

const Dashboard = () => {
  const router = useRouter();
  const id = useSelector((state) => state.auth.dataLogin.id);
  const token = useSelector((state) => state.auth.dataLogin.token);
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProfileAction(id, token));
  }, [dispatch, id, token]);

  useEffect(() => {
    getHistoriesLimit(token)
      .then((res) => {
        setHistory(res.data.data);
      })
      .catch((err) => {
      });
  }, [token]);

   return (
    <LoginLayout title="Dashboard">
      <div className="col-12 col-md-9">
        <div
          className={`d-flex justify-content-between text-white ${styles.saldoRow}`}
        >
          <div className="col-3">
            <p>Balance</p>
            <h1>Rp.{`${dataInfo ? dataInfo.data.balance : "0"}`}</h1>
            <p className="mt-4">{dataInfo ? dataInfo.data.noTelp : "No Number"}</p>
          </div>
          <div className="col-3 row gap-3">
            <button className={`btn ${styles.btnSaldo}`}
             onClick={() => {
              router.push("/transfer");
            }}
            >
              <Image src={Arrow} alt="transfer" />
              Transfer</button>
            <button className={`btn ${styles.btnSaldo}`}
             data-bs-toggle="modal"
             data-bs-target="#topUpModal"
             >
              <Image src={Plus} alt="topup" />
              Top Up</button>
          </div>
        </div>
        <div
          className={`d-flex justify-content-between gap-3 mt-4 ${styles.rowInfo}`}
        >
          <div className={`col-5 ${styles.colDashboard}`}>
            <div className="row justify-content-between">
              <div className={`col-md-4 col-4 ${styles.dashboardCard}`}>
                <Image src={ArrowGreen} alt="arrow-gren" />
                <p>Income</p>
                <p>Rp. 2.120.000</p>
              </div>
              <div className={`col-md-4 col-4 ps-4 ${styles.dashboardCard}`}>
                <Image src={ArrowRed} alt="arrow-gren" />
                <p>Expense</p>
                <p>Rp. 1.560.000</p>
              </div>
            </div>
          </div>
          <div className={`col-4 ${styles.colHistory}`}>
            <div className="row justify-content-between">
              <div className="col-md-7 col-9">
                <p className={`fw-bold ${styles.clickAble}`}>
                  Transaction History
                </p>
              </div>
              <div className="col-md-3 col-3">
                <p className={`${styles.clickAble}`}
                  onClick={() => {
                    router.push("/history");
                  }}
                >See all</p>
              </div>
            </div>
            {history.map((data) => (
              <CardHistory
                image={data.image}
                firstName={data.firstName}
                lastName={data.lastName}
                type={data.type}
                amount={data.amount}
                key={data.id}
              />
            ))}
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Dashboard;