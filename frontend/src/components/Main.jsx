import { useContext } from "react"
import { Card } from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

export function Main(props) {

  const currentUser = useContext(CurrentUserContext)

    return(
      <main>
        <section className="profile">
          <div className="profile__avatar-zone">
            <button className="profile__avatar-edit" type="button" aria-label="edit" onClick={ props.onEditAvatar }></button>
            <img src={ currentUser.avatar } alt="Аватар профиля" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">{ currentUser.name }</h1>
            <button className="profile__info-edit" type="button" aria-label="edit" onClick={ props.onEditProfile }></button>
            <p className="profile__info-hobby">{ currentUser.about }</p>
          </div>
          <button className="profile__add-mesto" type="button" aria-label="add" onClick={ props.onAddPlace }></button>
        </section>
        <section className="cards">
          <ul className="cards__list">
            {props.cards.map((card) => (
              <Card 
                key = { card._id } 
                card = { card } 
                link = { card.link }
                name = { card.name }
                onCardClick = { props.onCardClick }
                onCardLike = { props.onCardLike }
                onConfirmDelete = { props.onConfirmDelete }
              />
            ))}
          </ul>
        </section>
      </main>
    )
}