import React from 'react'

export default function Smurf(props) {
    return (
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <h4>AGE: {props.smurf.age}</h4>
            <h5>HEIGHT: {props.smurf.height}</h5>
        </div>
    )
}
