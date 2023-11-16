import { useEffect } from "react"

export function ImagePopup(props) {

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
        <div className={ `popup popup_zoom_active ${ props.isOpen ? 'popup_opened' : '' }`} onMouseDown={handleOverlayClose}>
            <div className="popup__zoom-container">
                <img src={ props.card.link } className="popup__image" alt={ props.card.name }/>
                <button type="button" className="popup__close" aria-label="Закрыть" onClick={ props.onClose }></button>
                <p className="popup__description">{ props.card.name }</p>
            </div>
        </div>
    )
}