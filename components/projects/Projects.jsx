import styles from "./projects.module.scss"
import Project from "./project/Project"
import projects from "../../data/projects"

export default function Projects() {
    return (
        <div className={styles.projects} id="projects">
            <ul>
                <li className={styles.labelWrapper}>
                    <h1 className="sectionLabel"><em>02.</em> Featured Projects</h1>
                </li>
                {
                    projects.map(a => {
                        return <Project key={a.id} id={a.id} title={a.title} description={a.description} tools={a.tools} source={a.source} live={a.live} imagePath={`/images/P${a.id}_hero.png`} />
                    })
                }
            </ul>
        </div>
    )
}
