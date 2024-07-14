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
            'React',
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
            'JSS',
            'React',
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
            'JSS',
            'i18next',
            'React',
        ],
        agencyAnalytics: [
            'JavaScript',
            'TypeScript',
            'LESS',
            'CSS Modules',
            'Storybook',
            'GCP',
            'Docker',
            'SQL',
            'React',
        ],
        viewLabsMeet: [
            'JavaScript',
            'AWS S3',
            'AWS EC2',
            'Node.js',
            'MUI',
            'SQL',
            'Redux',
            'JSS',
            'React',
            'Bash Scripting',
        ],
        viewLabsUlta: ['JavaScript', 'krpano', 'MUI', 'JSS'],
    }

    return (
        <div className={styles.container}>
            <h4>Production &amp; Corporate Projects</h4>
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
                        Personal project, wanted to single-handedly build a
                        production level app that would push, expand, and
                        reinforce my knowledge relative to software development
                        and design.
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
                    <img src="/recycletek-kiosk.png" />
                </div>
                <div className={styles.info}>
                    <h5>Recycletek - Kiosk App</h5>
                    <br />
                    <p>
                        Touchscreen interface built for Recycletek. Sole
                        developer and designer on the project. The UI interacts
                        with the machinery and AI software that collects,
                        counts, and gives users money for returning their
                        bottles. The reverse vending machine aims to solve many
                        issues prevalent in the consumer recycling process.
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
                    <img src="/recycletek-webapp.png" />
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
            <article className={styles.project}>
                <div className={styles.photo}>
                    <img src="/agency-analytics.png" />
                </div>
                <div className={styles.info}>
                    <h5>Agency Analytics</h5>
                    <br />
                    <a href="https://agencyanalytics.com/" target="_blank">
                        <p>agencyanalytics.com</p>
                    </a>
                    <br />
                    <br />

                    <p>
                        SaaS that empowers digital marketers, providing data and
                        client presentation solutions. Mid size business with
                        over 130,000 end users.
                    </p>
                    <br />
                    <p>
                        Worked in a siloed team targeting user experience. Large
                        legacy codebase, therefore a significant portion of
                        tasks were maintenance related. However, was frequently
                        involved in ongoing high-importance feature builds.
                    </p>
                    <br />
                    <div className={styles.tech}>
                        {tech.agencyAnalytics.map((item) => (
                            <div className={styles.pill}>{item}</div>
                        ))}
                    </div>
                </div>
            </article>
            <article className={styles.project}>
                <div className={styles.photo}>
                    <img src="/view-labs-meet.png" />
                </div>
                <div className={styles.info}>
                    <h5>View Labs - Conferencing Platform</h5>
                    <br />
                    <a href="https://www.viewlabs.com/360meet" target="_blank">
                        <p>viewlabs.com/360meet</p>
                    </a>
                    <br />
                    <br />

                    <p>
                        Video conferencing platform built for hosting virtual
                        real estate tours.
                    </p>
                    <br />
                    <p>
                        Worked on the project as a junior developer. Learned how
                        to use Redux and many other tools while on the job. The
                        startup environment allowed for the opportunity to
                        develop many important features despite limited
                        experience, ultimately fast-tracking my skillset.
                    </p>
                    <br />
                    <div className={styles.tech}>
                        {tech.viewLabsMeet.map((item) => (
                            <div className={styles.pill}>{item}</div>
                        ))}
                    </div>
                </div>
            </article>
            <article className={styles.project}>
                <div className={styles.photo}>
                    <img src="/view-labs-ulta.png" />
                </div>
                <div className={styles.info}>
                    <h5>View Labs - Ulta Virtual Tour</h5>
                    <br />
                    <a
                        href="https://chainstoreage.com/ulta-beauty-continues-blending-physical-and-digital-experiences"
                        target="_blank"
                    >
                        <p>Press Release</p>
                    </a>
                    <br />
                    <br />

                    <p>
                        View Labs (formerly VirtualAPT) was contracted by the
                        largest beauty retailer in America to build an
                        interactive virtual tour.
                    </p>
                    <br />
                    <p>
                        Led the UI development, guiding and assisting interns
                        that were also placed on the project. Was a unique
                        project given the tech stack - an interactive video
                        built with krpano that communicated seamlessly with
                        React overlays. Please note the project was developed a
                        few years ago and has since been moved or deleted.
                    </p>
                    <br />
                    <div className={styles.tech}>
                        {tech.viewLabsUlta.map((item) => (
                            <div className={styles.pill}>{item}</div>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Projects
