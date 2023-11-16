import { useContext, useEffect } from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useForm } from "../hooks/useForm";

export function EditProfilePopup(props) {
    const currentUser = useContext(CurrentUserContext)

    const { values, setValues, handleChange, resetForm, errors, isValid } = useForm()

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true)
        }
    }, [currentUser, resetForm, props.isOpen])

    useEffect(() => {
        if (currentUser) {
            setValues(currentUser);
        }
    }, [currentUser, setValues ,props.isOpen])

    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateUser(values)
    }
    
    return(
        <PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            onSubmit = { handleSubmit }
            title = 'Редактировать профиль'
            name = 'profile'
            isValid = { isValid }
            isDisabled = { !isValid || props.isLoading }
            buttonText = { props.isLoading ? 'Сохранение...' : 'Сохранить' }
        >
        <input name="name" className="popup__edit popup__edit_margin" type="text" placeholder="Ваше имя" value={ values.name || '' } onChange={ handleChange } minLength="2" maxLength="40" required/>
            <span id="name-error" className="popup__error popup__error_active">{ errors.name || "" }</span>
        <input name="about" className="popup__edit" type="text" placeholder="Род деятельности" value={ values.about || '' } onChange={ handleChange } minLength="2" maxLength="200" required/>
            <span id="about-error" className="popup__error popup__error_active">{ errors.about || "" }</span>
        </PopupWithForm>
    )
}