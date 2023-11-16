import { useEffect } from "react"

export function PopupWithForm(props) {

  useEffect(() => {
    if (!props.isOpen) return;
    
    function handleESC(e) {
      if (e.key === "Escape") {
        props.onClose()
      }
    }
    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, [props.isOpen]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && props.isOpen) {
      props.onClose();
    }
  }

  return(
   <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onMouseDown={handleOverlayClose}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={ props.onClose } aria-label="Закрыть"></button>
        <h2 className="popup__title ">{ props.title }</h2>
        <form className="popup__form" name={ props.name } onSubmit={ props.onSubmit }>
          { props.children }
          <button type="submit" disabled={ props.isDisabled } className={`popup__submit ${!props.isValid ? 'popup__submit_inactive' : ''}`} aria-label="save">{ props.buttonText }</button>
        </form>
      </div>
   </div>
  )
}