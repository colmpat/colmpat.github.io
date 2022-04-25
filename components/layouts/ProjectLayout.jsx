import styles from "./projectLayout.module.scss"
import Link from "next/link"

export default function PrpjectLayout({ meta, children }) {
    const { id, title, description } = meta;
    return (
        <div className={styles.project}>
            <div className={styles.backWrapper}>
                <Link href={"/#projects"}>
                    <a className="button">Back to Projects</a>
                </Link>
            </div>
            <div className={styles.headingWrapper}>
                <h3>Project { id < 10 ? "0" + id : id }</h3>
                <h1>{ title }</h1>
            </div>
            <div className={styles.body}>
                <p>{ description }</p>
                { children }
            </div>

        </div>
    )
}
