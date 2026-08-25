import styles from "../App.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div
      className={`${styles.sectionHeading} ${light ? styles.lightText : ""}`}
    >
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
