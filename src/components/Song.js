import React, { Fragment } from 'react'

function Song ({letter}) {

    if(letter.length === 0) return null
    return (
        <Fragment>
        <h2>Letra Cancion</h2>
        <p className="letra">{letter}</p>
        </Fragment>
    )
}

export default Song;