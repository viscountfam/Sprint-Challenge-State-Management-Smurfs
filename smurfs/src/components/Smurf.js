import React from 'react'
import { connect } from 'react-redux';
import { removeSmurf } from '../actions'

 function Smurf(props) {
    return (
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <h4>AGE: {props.smurf.age}</h4>
            <h5>HEIGHT: {props.smurf.height}</h5>
            <h6>Id: {props.smurf.id}</h6>
            <button onClick={()=> props.removeSmurf(props.smurf.id)}>Remove Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        state
    }
}
export default connect(
    mapStateToProps,
    { removeSmurf }
)(Smurf)