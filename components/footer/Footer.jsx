import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>{"Made with <3 by Colm Lang. "} Using <a href="https://reactjs.org" rel="noreferrer">React</a>, <a href="https://nextjs.org" rel="noreferrer">Next.js</a>, <a href="https://sass-lang.com" rel="noreferrer">Sass</a>, and <a href="https://mdxjs.com" rel="noreferrer">MDX</a>. 
            <em> Design based on <a href="https://brittanychiang.com" target="_blank">Brittany Chiang's</a> personal website.</em></p>
        </div>
    );
}
 
export default Footer;