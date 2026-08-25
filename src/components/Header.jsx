import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import styles from '../App.module.css'
import Logo3D from './Logo3D'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Platform', 'How it works', 'Security', 'Pricing']
  return <header className={styles.header}>
    <Logo3D />
    <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      {links.map((link) => <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link} onClick={() => setOpen(false)}>{link}</a>)}
      <a href="#contact" className={styles.navCta} onClick={() => setOpen(false)}>Book a demo <ArrowUpRight size={15} /></a>
    </nav>
    <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
  </header>
}