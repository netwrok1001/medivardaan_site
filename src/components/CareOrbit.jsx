import { Activity, HeartPulse, ShieldCheck } from 'lucide-react'
import styles from '../App.module.css'

export default function CareOrbit() {
  return <div className={styles.careOrbit} aria-hidden="true">
    <div className={styles.orbitHalo} />
    <div className={styles.orbitRing} />
    <div className={`${styles.orbitNode} ${styles.nodePulse}`}><HeartPulse size={15} /></div>
    <div className={`${styles.orbitNode} ${styles.nodeShield}`}><ShieldCheck size={14} /></div>
    <div className={`${styles.orbitNode} ${styles.nodeActivity}`}><Activity size={14} /></div>
    <div className={styles.careCore}>
      <span className={styles.corePulse} />
      <strong>24/7</strong>
      <small>care connected</small>
    </div>
  </div>
}
