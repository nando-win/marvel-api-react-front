import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function Comics() {

    const [comics, setComics] = useState([]);

    useEffect(() => {
        api.get('/comics')
            .then(response => { setComics(response.data.data.results) })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <p>Comics</p>
            <ul>{comics.map(comic => {
                return (
                    <li key={comic.id}>
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`${comic.title}`} />
                        <span>{comic.title}</span>
                    </li>
                )
            })}</ul>
        </div>
    )
}