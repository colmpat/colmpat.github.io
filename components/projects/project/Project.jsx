import styles from "./project.module.scss"
import Link from 'next/link'

export default function Project({ id, title, description, tools, source, live, imagePath }) {
  return (
    <li className={styles.project}>
      <div className={`${styles.wrapper} ${id % 2 === 0 ? styles.left : styles.right}`}>
        <h2>Project { id < 10 ? "0" + id : id }</h2>
        <h1>{ title }</h1>
        <div className={styles.projectDescription}>
          <p>{ description }</p>
        </div>
        { tools && (
          <div className={styles.tools}>
            <p>{tools}</p>
          </div>
        )}
        <div className={styles.buttonWrapper}>
          {source &&
            <a href={source} target='_blank' className={`button ${styles.button}`}>Source Code</a>
          }
          {live &&
            <a href={live} target='_blank' className={`button ${styles.button}`}>Live Deployment</a>
          }
        </div>
        
      </div>

      <div className={`${styles.imageWrapper} ${id % 2 === 0 ? styles.left : styles.right}`}>
        <a href={live ? live : source} target='_blank' className={styles.imageClick}> 
          <img src={imagePath} layout="fill" className={styles.image}/>
        </a>
      </div>
    </li>
    
  )

  }

