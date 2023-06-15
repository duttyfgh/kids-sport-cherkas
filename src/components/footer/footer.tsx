import classes from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>Інформаційний портал "Дитячий спорт Черкащини",</p>
            <span>
                © 2023 всі права захищені <a target={'_blank'} href="https://creativecommons.org/licenses/by/4.0/deed.uk">
                    Creative Commons BY 4.0</a>
            </span>
            <div className={classes.line}></div>
            <div className={classes.autorSite}>Цей сайт створено
                <a href="https://www.instagram.com/dutyfgh/" target={'_blank'}>
                    <FontAwesomeIcon icon={faInstagram} className={classes.inst} /></a></div>
            <Link to='/version' className={classes.version}>
                0.9v
            </Link>
        </footer>

    )
}

export default Footer