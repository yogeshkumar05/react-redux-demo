import React from 'react';
import { connect } from 'react-redux';

const User = (props) => {
    return (<h1>{props.username}</h1>);
}
const mapStateToProps = (state) => ({
    username: state.name,
})

export default connect(mapStateToProps, null)(User);