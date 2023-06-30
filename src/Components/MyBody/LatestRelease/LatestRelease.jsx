import React from 'react';
import { useContext } from 'react';
import BookState from '../../../Context/BookContext';


const LatestRelease = () => {

    const allBooks = useContext(BookState);


    return (
        <>
        <h1>{allBooks.genre}</h1>
        {JSON.stringify(allBooks.data)}
        </>
    )
}

export default LatestRelease