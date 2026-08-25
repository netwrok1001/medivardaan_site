import styles from "../App.module.css";

export default function FeatureCard({ icon: Icon, title, text, number }) {
  return (
    <article className={`${styles.featureCard} featureCard`}>
      <div className={styles.featureTop}>
        <span className={styles.iconBox}>
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <span className={styles.featureNumber}>{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className={styles.cardArrow}>↗</span>
    </article>
  );
}
