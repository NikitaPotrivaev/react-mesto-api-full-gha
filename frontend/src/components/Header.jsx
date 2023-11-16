import logo from '../images/logo.svg';
import { Link, Route, Routes } from 'react-router-dom'

export function Header(props) {

    return(
    <header className="header">
        <img src={logo} alt="Место" className="header__logo"/>
        <div className="header__member-zone">
            { props.isLoggedIn ? (
                <>
                    <p className="header__email">{ props.email }</p>
                    <Link to='/sign-in' className="header__menu" onClick={ props.isLogout }>Выйти</Link>
                </>
            ) : (
                <>
                <Routes>
                    <Route path="/sign-up" element = {<Link to="/sign-in" className="header__menu">Войти</Link>} />
                    <Route path="/sign-in" element = {<Link to="/sign-up" className="header__menu">Регистрация</Link>}/>
                </Routes>
                </>
            )}
        </div>
    </header>
    )
}