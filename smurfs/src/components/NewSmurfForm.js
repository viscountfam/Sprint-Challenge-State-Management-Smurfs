import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PostSmurfs } from '../actions'
 function NewSmurfForm(props) {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    });
    const handleChange = event => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        });
    };
    const resetForm = () => {
        setNewSmurf({
            name: "",
            age: "",
            height: "",
            id: Date.now()
        })
    }
    const submit = () => {
        console.log("new Smurf directly before being sent as an action", newSmurf)
        props.PostSmurfs(newSmurf);
        // resetForm();
    }
    return (
        <div>
            <input 
                type="text"
                name="name"
                value={newSmurf.name}
                onChange={handleChange}
                placeholder="name"
            />
            <input
                type="number"
                name="age"
                value={newSmurf.age}
                onChange={handleChange}
                placeholder="age"
            />
            <input
                type="text"
                name="height"
                value={newSmurf.height}
                onChange={handleChange}
                placeholder="height"
            />
            <button onClick={() => {submit()}}>Submit new smurf</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        state
    };
};

export default connect(
    mapStateToProps,
    {PostSmurfs}
)(NewSmurfForm);
