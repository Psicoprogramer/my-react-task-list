import {  createPortal } from "react-dom";
import React  from "react";


export default function Modals({ children }) {
  const modalRoot = document.getElementById('modal-root');

  return createPortal(
    <div className="modal">
      {children}
    </div>,
    modalRoot
  );
}

