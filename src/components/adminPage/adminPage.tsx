import { useState } from 'react'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import classes from './adminPage.module.css'
import AuthAdmin from './authAdmin/authAdmin'
import EditSitePage from './editSitePage/editSitePage'

const AdminPage = () => {
    const { password, isAdmin: areAdmin } = useAppSelector(
        (state) => state.admin
    )
    const [isAdmin, setIsAdmin] = useState(areAdmin)
    const { setAdmin } = useActions()

    const onSetAdmin = () => {
        setIsAdmin(true)
        setAdmin(true)
    }

    return (
        <div className={classes.adminPage}>
            <div className={classes.newsLine}>
                <div className={classes.redBlock}></div>
                <span>ПАНЕЛЬ РЕДАГУВАННЯ</span>
                <div className={classes.greenLine}></div>
            </div>
            {isAdmin
                ? <EditSitePage />

                : <AuthAdmin
                    password={password}
                    onSetAdmin={onSetAdmin}
                />
            }
        </div>
    )
}

export default AdminPage
