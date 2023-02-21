import React, { useEffect, useState } from 'react';
// import Modal from '../../components/Modal';
import Modal from 'react-modal';
import ReactDOM from 'react-dom/client';

import api from '../../services/api';
import './index.css'

Modal.setAppElement("#root");

export default function Comics() {

    const [comics, setComics] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);


    const openModal = (comic) => {
        setSelectedProject(comic);
        setIsOpen(true);
        returnModal(comic)
    }

    const closeModal = () => {
        setSelectedProject(null);
        setIsOpen(false);
    }

    function returnModal(props) {
        console.log("Modal clicado 2", props.title)

        if (props.title != null) {
            return (
                <span>{props.title}</span>
                //     <Modal
                //         isOpen={modalIsOpen}
                //         onRequestClose={closeModal}
                //         contentLabel="Example Modal"
                //         overlayClassName="modal-overlay"
                //         className="modal-content"
                //     >
                //         <h1>{selectedProject.title}</h1>
                //         <hr />
                //         <p>{selectedProject.description}</p>
                //         <button onClick={closeModal}>Close</button>
                //     </Modal>
            )
        }

    }



    useEffect(() => {
        api.get('/comics')
            .then(response => { setComics(response.data.data.results), console.log(response.data.data.results) })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <ul className='covers'>
                {comics.map(comic => {
                    return (
                        <li className='item' key={comic.id}>
                            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`${comic.title}`} />
                            <h3 className='title'>{comic.title}</h3>
                            <button onClick={() => (openModal(comic))}>Informations</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlay"
                                className="modal-content"
                            >
                                <h1>{comic.title}</h1>
                                <hr />
                                <p>{comic.description}</p>
                                <button onClick={closeModal}>Close</button>
                            </Modal>
                        </li>
                    )
                })}</ul>
        </div>
    )
}