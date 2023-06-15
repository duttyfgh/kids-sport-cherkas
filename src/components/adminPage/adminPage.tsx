import { faArrowRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopLine from '../../common/topLine/topLine'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import classes from './adminPage.module.css'
import AuthAdmin from './authAdmin/authAdmin'

const AdminPage = () => {
    const { password, isAdmin: areAdmin } = useAppSelector(
        (state) => state.admin
    )
    const [isAdmin, setIsAdmin] = useState(areAdmin)
    const { setAdmin, willLogOut } = useActions()

    const onSetAdmin = () => {
        setIsAdmin(true)
        setAdmin(true)
    }

    const logOut = () => {
        willLogOut()
    }

    return (
        <div className={classes.adminPage}>
            <TopLine style={{ marginTop: '30px' }} text='редагування' />
            {isAdmin
                ? <div className={classes.pageChanges}>
                    <Link to={'/add-news'} className={classes.addNews}><FontAwesomeIcon icon={faPlus} /></Link>
                    <Link to={'/main'} onClick={logOut} className={classes.logOut}><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
                </div>

                : <AuthAdmin
                    password={password}
                    onSetAdmin={onSetAdmin}
                />
            }
        </div>
    )
}

export default AdminPage
