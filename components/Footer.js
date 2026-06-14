import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://www.netlify.com" target="_blank" rel="noopener">
          <img src="/deep-prehistoo-(46).png" alt="Netlify Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
