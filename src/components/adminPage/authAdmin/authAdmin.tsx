import classes from './authAdmin.module.css'
import { ChangeEvent, useEffect, useState } from "react"

type AuthAdminProps = {
    onSetAdmin: () => void
    password: string
}

const AuthAdmin = (props: AuthAdminProps) => {
    const [passwordValue, setPasswordValue] = useState('')
    const [localPassword, setLocalPassword] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        if (passwordValue.length === 0) {
            setError(false)
        }
    }, [passwordValue])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
        setLocalPassword(e.target.value)
    }

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (localPassword === props.password) {
            props.onSetAdmin()
        } else {
            e.preventDefault()
            setError(true)
        }
    }

    return (
        <div className={classes.authBlock}>
            <form>
                <h1>Введіть адмін пароль</h1>
                
                <input
                    className={
                        error ? classes.errorInput : classes.adminInput
                    }
                    type="password"
                    placeholder="Введіть адмін пароль..."
                    value={passwordValue}
                    onChange={onChangeHandler}
                />
                {error && (
                    <div className={classes.errorMessage}>
                        Incorrect admin password..
                    </div>
                )}
                <span>пароль: "1"</span>
                <button onClick={onClickHandler}>Увійти</button>
            </form>
        </div>
    )
}

export default AuthAdmin