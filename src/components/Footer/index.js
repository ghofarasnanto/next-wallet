import React, { Component } from 'react'
import styles from '../../../styles/Footer.module.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={styles.container}>
          <h2>
            FazzPay
          </h2>
          <p>
            Simplify financial needs and saving much time in banking needs with one single app.
          </p>
          <hr />
          <div className={`${styles.footerCopyright} d-flex flex-wrap justify-content-between`}>
            <div className={`p-2`}>
              <p>2020 FazzPay. All right reserved.</p>
            </div>

            <div className={`${styles.footerInfo} d-flex flex-row p-2`}>
              <div className={``}>
                <p>+62 5637 8882 9901</p>
              </div>
              <div className={``}>
                <p>contact@fazzpay.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer