import React from 'react';
import reactDom from 'react-dom';

const Modal = props => {
    return reactDom.createPortal(
        <div className='overlay'>
            <div className='overlayContent'>{props.children}</div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;