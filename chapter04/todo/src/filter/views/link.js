import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions';

const Link = ({active,children,onClick}) =>{
    if(active){
        return <b className="filter selected">{children}</b>
    }else{
        return (
            <a href="#" className="filter not-selected" onClick={(ev)=>{
                ev.preventDefault();
                onClick();
            }}>
               {children}
            </a>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state,ownProps)=> {
    return {
        active : state.filter === ownProps.filter
    }
}

const mapDispatchProps = (dispatch,ownProps) =>{
    return {
        onClick:()=>{
           dispatch(setFilter(ownProps.filter));
        }
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Link);