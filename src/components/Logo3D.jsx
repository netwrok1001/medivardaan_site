import logo from "../assets/logo.png";
import styles from "./Logo3D.module.css";

export default function Logo3D() {
  return (
    <a href="#top" className={styles.logo} aria-label="Medivardaan home">
      <img src={logo} alt="Medivardaan" />
      <span className={styles.logoCaption}>care, connected</span>
    </a>
  );
}
