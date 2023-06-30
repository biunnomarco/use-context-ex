import context from 'react-bootstrap/esm/AccordionContext'
import fantasy from '../JSON/fantasy.json'
import history from '../JSON/history.json'
import horror from '../JSON/horror.json'
import romance from '../JSON/romance.json'
import scifi from '../JSON/scifi.json'
import React, {createContext, useState} from 'react'

const allGenres = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    scifi: scifi,
    romance: romance,
}

const BookState = createContext();


export const value = {
    data: [],
    filteredData: [],
    genre: '',
    allGenres,
}

function setState(genre, name) {
    value.data = genre;
    value.genre = name;
    console.log(value)
}

export {setState}
export default BookState