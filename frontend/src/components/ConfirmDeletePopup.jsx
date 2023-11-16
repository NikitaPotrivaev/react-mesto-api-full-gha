import { PopupWithForm } from "./PopupWithForm";
import { useForm } from "../hooks/useForm";

export function ConfirmDeletePopup(props) {

    const { isValid } = useForm()

    function handleSubmit(e) {
        e.preventDefault()
        props.onCardDelete(props.card)
    }

    return(
        <PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            onSubmit = { handleSubmit }
            isValid = { !isValid }
            title = 'Вы уверены ?'
            name = 'delete'
            buttonText = { props.isLoading ? 'Удаление...' : 'Да' }
        />
    )
}