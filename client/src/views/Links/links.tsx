import styles from './links.module.css'

function Links() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/Matt2844" target="_blank">
                <i className="fa fa-github"></i>
            </a>
            <p>matt.hd.ford@gmail.com</p>
        </div>
    )
}

export default Links
