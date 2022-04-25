import styles from "./intro.module.scss"

export default function Intro() {
  return (
    <div className={styles.intro} id="intro">
        <div className={styles.left}>
            <h1 className={styles.sectionLabel + " sectionLabel"}><em>01. </em>Intro</h1>
            <h2>Computer Science Student <em>@</em><a href="https://www.usfca.edu" target="_blank" rel="noreferrer">USFCA</a></h2>
            <h1>Software Engineer</h1>
            <h3>Colm Lang</h3>
        </div>
        <div className={styles.right}>
            
        </div>
    </div>
  )
}
