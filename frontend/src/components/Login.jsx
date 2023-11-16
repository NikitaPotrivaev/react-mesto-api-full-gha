import { useState } from "react";

export function Login(props) {
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
        props.onLogin(password, email)
    }

    return(
        <div className="auth">
            <h2 className="auth__title">Войти</h2>
            <form className="auth__form" onSubmit = { handleSubmit }>
                <input className="auth__input" name="email"  onChange = { handleEmail } value = { email || '' } type="email" placeholder="Email" required/>
                <input className="auth__input" name="password" onChange = { handlePassword } value = { password || '' } type="password" placeholder="Пароль" required/>
                <button className="auth__submit" type="submit" aria-label="Entarnce">{ props.isLoading ? 'Войти...' : 'Войти' }</button>
            </form>
        </div>
    )
}