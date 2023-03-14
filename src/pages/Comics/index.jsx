import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import api from '../../services/api';
import './index.css'

Modal.setAppElement("#root");

export default function Comics() {

    const [comics, setComics] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState([]);


    const openModal = (comic) => {
        setSelectedProject(comic);
        setIsOpen(true);
    }

    const closeModal = () => {
        setSelectedProject([]);
        setIsOpen(false);
    }

    // function consolado(selectedProject) {
    //     console.log('projetado', selectedProject);
    // }


    useEffect(() => {
        api.get('/comics')
            .then(response => { setComics(response.data.data.results), console.log(response.data.data.results) })
            .catch(err => console.log(err));
    }, [])

    return (<>
        <div className='covers'>
            {comics.map(comic => {
                return (
                    <div className='item' key={comic.id}>
                        <img className='imageCover' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`${comic.title}`} />
                        <h3 className='title'>{comic.title}</h3>
                        <button onClick={() => (openModal(comic))}>Informations</button>
                        {selectedProject.thumbnail != null &&
                            <Modal
                                isOpen={modalIsOpen && (selectedProject.title && selectedProject.description) != null}
                                onAfterOpen={console.log('consolação', selectedProject)}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlay"
                                className="modal-content"
                            >
                                <div>
                                    <p className='modalTitle'>{selectedProject != null ? selectedProject.title : false}</p>
                                    <hr />
                                </div>
                                {/* <img className='imageCover' src={`${selectedProject.thumbnail.path}.${selectedProject.thumbnail.extension}`} alt={`${selectedProject.title}`} /> */}
                                <div><p>{selectedProject != null ? selectedProject.description : false}</p>
                                    <img className='modal-image' src={selectedProject.thumbnail.path && selectedProject.thumbnail.path != null ? `${selectedProject.thumbnail.path}.${selectedProject.thumbnail.extension}` : 'https://i.pinimg.com/custom_covers/222x/614671117831336685_1572184866.jpg'} alt={`${selectedProject.title}`} />
                                </div>
                                {/* <button className='openModalButton' onClick={consolado(selectedProject)}>Console</button> */}
                                <button className='openModalButton' onClick={closeModal}>Close</button>
                            </Modal>}

                    </div>
                )
            })}</div>

    </>
    )
}