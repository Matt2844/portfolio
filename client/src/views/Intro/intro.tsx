import styles from './intro.module.css'
import { Parallax } from 'react-scroll-parallax'

function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Parallax className={styles.background} speed={-10} />
                <h1>Matt Ford</h1>
                <br />
                <h2>Frontend Developer &amp; Designer</h2>
            </div>
        </div>
    )
}

export default Intro
