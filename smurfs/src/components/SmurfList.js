import React from 'react'
import { connect } from 'react-redux';
import Smurf from './Smurf'
import { fetchSmurfs } from '../actions'
 function SmurfList(props) {
    return (
        <div>
            <h1>Here are all the Smurfs</h1>
            <button onClick={props.fetchSmurfs}>Update The List</button>
            {props.smurfArray.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf}/>
            ))}
        </div>

    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfArray: state.smurfArray,
        error: state.error,
        postError: state.postError
    };
};

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfList);