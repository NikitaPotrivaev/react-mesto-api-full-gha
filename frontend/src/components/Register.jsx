import { useState } from "react"
import { Link } from "react-router-dom"

export function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister(password, email)
        setEmail('')
        setPassword('')
    }

return(
        <div className="auth">
            <h2 className="auth__title">Регистрация</h2>
            <form className="auth__form" onSubmit = { handleSubmit }>
                <input className="auth__input" name="email" onChange = { handleEmail } value = { email || '' } type="email" placeholder="Email" required/>
                <input className="auth__input" name="password" onChange = { handlePassword } value={ password || '' } type="password" placeholder="Пароль" required/>
                <button className="auth__submit" type="submit" aria-label="Register">{ props.isLoading ? 'Зарегистрироваться...' : 'Зарегистрироваться' }</button>
            </form>
            <div className="auth__register">
                <p className="auth__register-question">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="auth__link">Войти</Link>
            </div>
        </div>
    )
}