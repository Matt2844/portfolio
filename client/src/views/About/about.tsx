import styles from './about.module.css'

function Intro() {
    return (
        <div className={styles.container}>
            <h4>About</h4>
            <div className={styles.text}>
                <p>
                    I am a flexible team player who is genuinely interested in
                    building software. I have worked on teams as the only
                    frontend developer, and I have worked with teams of over 20
                    developers. Regardless of the environment, I always aim to
                    build a great product while maintaining alignment with
                    company goals.
                </p>
                <br />
                <p>
                    Although values may vary depending on the company, I try to
                    incorporate my own personal guidelines. I strongly value
                    UI/UX, communication, and legible code. When I am working
                    with another designer or creating a design myself, I
                    appreciate the artistic elements and advocate for the user.
                    Communication can be an art form in itself, especially when
                    building complex products. Eliminating confusion, providing
                    updates, and writing clear documentation are just some of
                    the communication methods I practice. As for writing code,
                    legibility is at the forefront of my development process. I
                    prioritize keeping a clean codebase that others can
                    effectively work with.
                </p>
                <br />
                <p>
                    There comes a time when I have to step away from my desk. I
                    typically use that time to golf, ski, hike, or spend time
                    with friends and family.
                </p>
            </div>
        </div>
    )
}

export default Intro
