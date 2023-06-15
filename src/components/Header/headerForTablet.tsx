import classes from './headerForTablet.module.css'
import logo from '../../assets/images/big-logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '../../hooks/redux'

const HeaderForTablet = () => {
    const [dropPonelIsActive, setDropPonelIsActive] = useState(false)

    const activeteDropPonel = () => {
        setDropPonelIsActive(true)
    }
    const unActiveteDropPonel = () => {
        setDropPonelIsActive(false)
    }

    const { isAdmin } = useAppSelector(state => state.admin)

    return (
        <header className={classes.header}>
            <div className={classes.redLine}></div>
            <NavLink to='/main'><img src={logo} /></NavLink>
            {dropPonelIsActive
                ? <div className={classes.burger}><span>МЕНЮ</span>
                    <FontAwesomeIcon onClick={unActiveteDropPonel} icon={faXmark} /></div>
                : <div className={classes.burger}><span>МЕНЮ</span>
                    <FontAwesomeIcon onClick={activeteDropPonel} icon={faBars} /></div>
            }

            {dropPonelIsActive && <div className={classes.dropPonel}>
                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/main'}>
                    ГОЛОВНА
                </NavLink>

                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/news'}>
                    НОВИНИ
                </NavLink>

                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/football'}>
                    ФУТБОЛ
                </NavLink>

                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/basketball'}>
                    БАСКЕТБОЛ
                </NavLink>

                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/outher'}>
                    ІНШІ ВИДИ
                </NavLink>

                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/videos'}>
                    ВІДЕО
                </NavLink>

                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/about-as'}>
                    ПРО НАС
                </NavLink>

                <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/contacts'}>
                    КОНТАКТИ
                </NavLink>

                {isAdmin && <NavLink onClick={unActiveteDropPonel} className={navData =>
                    navData.isActive ? classes.active : classes.vigetsItem} to={'/admin'}>
                    АДМІН
                </NavLink>}


            </div>}


        </header>
    )
}

export default HeaderForTablet