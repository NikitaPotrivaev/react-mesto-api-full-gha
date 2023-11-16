import { PopupWithForm } from "./PopupWithForm";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export function AddPlacePopup(props) {

   const { values, handleChange, resetForm, errors, isValid } = useForm()

   useEffect(() => {
    resetForm()
   }, [resetForm, props.isOpen])

   function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace(values.name, values.link)
   }

    return(
    <PopupWithForm
        isOpen = { props.isOpen }
        onClose = { props.onClose }
        onSubmit = { handleSubmit }
        isValid = { isValid }
        isDisabled = { !isValid || props.isLoading }
        title = 'Новое место'
        name = 'mesto'
        buttonText = { props.isLoading ? 'Сохранение...' : 'Создать' }
    >
        <input name="name" className="popup__edit popup__edit_margin" value={ values.name || '' } onChange={ handleChange } type="text" placeholder="Название" minLength="2" maxLength="30" required/>
            <span id="name-error" className="popup__error popup__error_active">{ errors.name || "" }</span>
        <input name="link" className="popup__edit" value={ values.link || '' } onChange={ handleChange } type="url" placeholder="Ссылка на картинку" required/>
            <span id="link-error" className="popup__error popup__error_active">{ errors.link || "" }</span>
    </PopupWithForm>
    )
}