import styles from "@/styles/redirectpage.module.scss"
import logo from "@assets/cubeseed.png"
import Image from "next/image"

const RedirectPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.redirect_container}>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" className={styles.logoimg} />
          </div>
          <div className={styles.hangtight}>
            <h1 className={styles.hang_text}>Hange Tight!</h1>
          </div>
          <div className={styles.line}>
            <hr />
          </div>
          <div className={styles.redirectblock}>
            <p className={styles.redirect_to}>Redirecting to Google</p>
            <p className={styles.redirect_message}>
              This will only take a moment...
            </p>
          </div>
          <div className={styles.links}>
            <a href="#help" className={styles.helplink}>
              Help
            </a>
            <a href="#privacy" className={styles.privacylink}>
              Privacy
            </a>
            <a href="#terms" className={styles.termslink}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedirectPage
