import React from 'react'

export default function Streamer(props) {
    return (
        <li>
            <h3>{props.event.name}</h3>
            <p>Followers:{props.event.followers}</p>
        </li>
    )
}