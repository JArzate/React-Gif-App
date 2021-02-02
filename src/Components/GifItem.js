import React from 'react'

export const GifItem = ({ id, url, title }) => {
    return (
        <div className="gif-item animate__animated animate__fadeIn">
            <img src={url} />
            <p>{title}</p>
        </div>
    )
}
