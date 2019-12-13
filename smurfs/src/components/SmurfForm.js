import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createSmurf } from '../actions/actions'

const SmurfForm = props => {

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
      });

  
  const handleSubmit = e => {
    props.createSmurf(smurf);
    e.preventDefault();
    console.log(` SMURF FORM `, smurf);
  };

  const handleChanges = (e) => {
    setSmurf({
        ...smurf,
        [e.target.name]: e.target.value
    })
}

//   const handleChangeName = e => {
//     let name = e.target.name;
//     setSmurf({ ...smurf, [name]: e.target.value });
//   };

//   const handleChangeAge = e => {
//     let age = e.target.age;
//     setSmurf({ ...smurf, [age]: e.target.value });
//   };

//   const handleChangeHeight = e => {
//     let height = e.target.height;
//     setSmurf({ ...smurf, [height]: e.target.value });
//   };

    return (
        <form onClick={handleSubmit}>
            <input type="text" name="name" onChange={handleChanges} value={smurf.name}/>
            <br />
            <input type="text" name="age" onChange={handleChanges} value={smurf.age}/>
            <br />
            <input type="text" name="height" onChange={handleChanges} value={smurf.height}/>
            <br />
            <button type='submit' >Submit</button>
        </form>
    )
}

export default connect(null, { createSmurf }) (SmurfForm)
