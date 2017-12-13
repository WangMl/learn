import React,{Component,PropTypes} from 'react';
import store from '../Store';
import * as Actions from '../Actions.js';

class Counter extends Component{
    render(){
        const {caption,onIncrement,onDecrement,value} = this.props;
        return (
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <span>{caption} count : {value}</span>
            </div>
        ); 
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

class CounterContainer extends Component{
    constructor(props){
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState(){
       return {
           value: store.getState()[this.props.caption]
       }
    }

    onIncrement(){
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement(){
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange(){
        this.setState(this.getOwnState());
    }
    
    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps,nextState){
       return (nextProps.caption !== this.props.caption || 
               nextState.value !== this.state.value);
    }
    render(){
        return (
            <Counter caption={this.props.caption}
               onIncrement={this.onIncrement}
               onDecrement={this.onDecrement}
               value={this.state.value}
            />
        );
    }
}

CounterContainer.propTypes={
    caption:PropTypes.string.isRequired
}
export default CounterContainer;


