import classes from './Header.module.css'
import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/big-logo.png'
import HeaderForTablet from './headerForTablet'
import { useAppSelector } from '../../hooks/redux'

const HeaderForPC = () => {

  const { isAdmin } = useAppSelector(state => state.admin)
  let logoStyles = {}
  if (isAdmin) logoStyles = {
    marginRight: '0',
    marginLeft: '0'
  }

  return (
    <header className={classes.header}>
      <div className={classes.redLine}></div>
      <NavLink to='/main'><img style={logoStyles} src={logo} /></NavLink>

      <div className={classes.vigets}>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/'}>ГОЛОВНА</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/news'}>НОВИНИ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/football'}>ФУТБОЛ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/basketball'}>БАСКЕТБОЛ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/outher'}>ІНШІ ВИДИ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/videos'}>ВІДЕО</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/about-as'}>ПРО НАС</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/contacts'}>КОНТАКТИ</NavLink>
        {isAdmin &&
          <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/admin'}>АДМІН</NavLink>}

      </div>
    </header>
  )
}

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let headerComponent

  if(screenWidth > 1160) headerComponent = <HeaderForPC />
  else headerComponent = <HeaderForTablet />


  return (
    <div>
      {headerComponent}
    </div>
  )
}

export default Header
