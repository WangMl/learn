import React,{Component,PropTypes} from 'react';
import * as Actions from '../Actions.js';
import {connect} from 'react-redux';

function Counter(props){
    let {caption,onIncrement,onDecrement,value} = props;
    return(
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>{caption} count : {value}</span>
        </div>
    );
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        value: state[ownProps.caption]
    }
}

function mapDispathToProps(dispatch,ownProps){
    return {
        onIncrement:()=>{
            dispatch(Actions.increment(ownProps.caption));
        },
        onDecrement:()=>{
            dispatch(Actions.decrement(ownProps.caption));
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Counter);
