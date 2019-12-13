import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard'
import { getSmurf } from '../actions/actions'

const SmurfList = props => {
    useEffect(() => {
            props.getSmurf()

    }, [])
    console.log(props)
    return (
        <div>
            <div>
                {props.smurfs.map(smurf => {
                    return <SmurfCard key={smurf.id} smurf={smurf} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurf }) (SmurfList)
