import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './input.module.css'

const Input = () => {
    return (
        <div className={classes.inputShell}>
            <input type="text" placeholder='Пошук' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.search} />
        </div>
    )
}

export default Input