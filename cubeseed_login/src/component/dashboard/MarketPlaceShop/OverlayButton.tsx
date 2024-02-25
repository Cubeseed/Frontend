import styles from "@/styles/marketplacemansory.module.css"

const OverlayButton: React.FC = () => {
  return (
    <div className={styles.eachCardOverlay}>
      <button className={styles.overlayButton}>Shop Chicks</button>
    </div>
  )
}

export default OverlayButton
