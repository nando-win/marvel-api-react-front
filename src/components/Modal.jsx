import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './Modal.css'

Modal.setAppElement("#root");

export default function ({ setIsOpen }) {

    // const [modalIsOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false)
    }

    return (
        // <Overlay>
        //     <Container>
        //         <Header>
        //             <strong>Title</strong>
        //             <button type='button'>
        //                 <CloseIcon></CloseIcon>
        //             </button>
        //         </Header>
        //     </Container>
        // </Overlay>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <h1>{props.title}</h1>
            <hr />
            <p>{props.description}</p>
            <button onClick={closeModal}>Close</button>
        </Modal>
        // <div className="modalBackground">
        //     <div className="modalContainer">
        //         <div className="titleCloseBtn">
        //             <button
        //                 onClick={() => {
        //                     setOpenModal(false);
        //                 }}
        //             >
        //                 X
        //             </button>
        //         </div>
        //         <div className="title">
        //             <h1>Are You Sure You Want to Continue?</h1>
        //         </div>
        //         <div className="body">
        //             <p>The next page looks amazing. Hope you want to go there!</p>
        //         </div>
        //         <div className="footer">
        //             <button
        //                 onClick={() => {
        //                     setOpenModal(false);
        //                 }}
        //                 id="cancelBtn"
        //             >
        //                 Cancel
        //             </button>
        //             <button>Continue</button>
        //         </div>
        //     </div>
        // </div>
    )
}
