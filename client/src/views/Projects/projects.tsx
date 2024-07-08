import styles from './projects.module.css'

function Projects() {
    const tech = {
        wwGreetings: [
            'TypeScript',
            'Next.js',
            'Stripe',
            'Vite',
            'Zustand',
            'CSS modules',
            'Figma',
            'Firebase',
            'Vercel',
        ],
        kiosk: [
            'JavaScript',
            'Redux',
            'Cypress',
            'MUI',
            'Figma',
            'Jenkins',
            'GCP',
            'i18next',
        ],
        webApp: [
            'JavaScript',
            'Redux',
            'Maps API',
            'Cypress',
            'MUI',
            'Figma',
            'Adobe Photoshop',
            'Jenkins',
            'GCP',
            'i18next',
        ],
    }

    return (
        <div className={styles.container}>
            <h4>Projects</h4>
            <article className={styles.project}>
                <div className={styles.photo}>
                    <img src="/ww-greetings.png" />
                </div>
                <div className={styles.info}>
                    <h5>Warm Welcome Greetings</h5>
                    <br />
                    <a href="https://www.ww-greetings.com/" target="_blank">
                        <p>ww-greetings.com</p>
                    </a>
                    <br />
                    <br />
                    <p>
                        Entrepreneurial endeavor born from a desire to challenge
                        myself. I wanted to single-handedly build a production
                        level app that would push, expand, and reinforce my
                        knowledge relative to software development and design.
                    </p>
                    <br />
                    <p>
                        The app is a digital greeting note and guidebook for
                        short term rentals. Hosts answer a few prompts, select a
                        design, and then a greeting note and guidebook is
                        generated for them. The note and guidebook is accessed
                        by a QR code placed in the rental.
                    </p>
                    <br />
                    <div className={styles.tech}>
                        {tech.wwGreetings.map((item) => (
                            <div className={styles.pill}>{item}</div>
                        ))}
                    </div>
                </div>
            </article>
            <article className={styles.project}>
                <div className={styles.photo}>
                    <img src="/ww-greetings.png" />
                </div>
                <div className={styles.info}>
                    <h5>Recycletek - Kiosk App</h5>
                    <br />
                    <p>
                        Touchscreen interface built for Recycletek. The UI
                        interacts with the machinery and AI software that
                        collects, counts, and gives users money for returning
                        their bottles. The reverse vending machine aims to solve
                        many issues prevalent in the consumer recycling process.
                    </p>
                    <br />
                    <p>
                        The app is web based and displayed on a large
                        touchscreen. The UI supports many different use cases
                        and users flows, with an importance placed on ease of
                        use for customers and operators.
                    </p>
                    <br />
                    <div className={styles.tech}>
                        {tech.kiosk.map((item) => (
                            <div className={styles.pill}>{item}</div>
                        ))}
                    </div>
                </div>
            </article>
            <article className={styles.project}>
                <div className={styles.photo}>
                    <img src="/ww-greetings.png" />
                </div>
                <div className={styles.info}>
                    <h5>Recycletek - Web App</h5>
                    <br />
                    <a href="https://recycletek.co/" target="_blank">
                        <p>recycletek.co</p>
                    </a>
                    <br />
                    <br />

                    <p>
                        Company landing page and customer portal for Recycletek.
                        The site is for customers to log in and view their
                        recycling metrics and other relevant information.
                    </p>
                    <br />
                    <p>
                        The simple and clean design is mobile responsive and
                        contains some complex solutions based on user location.
                        Those frontend solutions were built to help improve the
                        UI/UX, and were not developed out of necessity but
                        rather the willingness to improve customer satisfaction.
                    </p>
                    <br />
                    <div className={styles.tech}>
                        {tech.webApp.map((item) => (
                            <div className={styles.pill}>{item}</div>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Projects
