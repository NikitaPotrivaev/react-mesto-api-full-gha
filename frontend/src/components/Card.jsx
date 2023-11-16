import { useContext } from "react"
import { CurrentUserContext } from "../context/CurrentUserContext"

export function Card(props) {
    const currentUser = useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === currentUser._id
    const isLiked = props.card.likes.some(item => item._id === currentUser._id);

    function handleClick() {
        props.onCardClick(props.card)
    }

    function handleDeleteClick() {
        props.onConfirmDelete(props.card)
    }

    function handleLike() {
        props.onCardLike(props.card)
    }

    return(
        <li className="cards__info">
            <img src={ props.link } alt={ props.name } className="cards__image" onClick={ handleClick }/>
            <div className="cards__item">
                <h2 className="cards__description">{ props.name }</h2>
                { isOwn && <button type="button" aria-label="delete" className="cards__delete" onClick={ handleDeleteClick } /> }
                <div className="cards__like-zone">
                    <button type="button" aria-label="like" className={`cards__like ${isLiked ? 'cards__like_active' : ''}`} onClick={ handleLike } />
                    <span className="cards__like-counter">{ props.card.likes.length > 0 ? props.card.likes.length : '' }</span>
                </div>
            </div>
        </li>
    )
}