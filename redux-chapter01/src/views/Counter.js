import React,{Component,PropTypes} from 'react';
import store from '../Store';
import * as Actions from '../Actions.js';

class Counter extends Component{
    constructor(props){
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState(){
        return {
            value: store.getState()[this.props.caption]
        };
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
    onClickIncrementButton(){
        store.dispatch(Actions.increment(this.props.caption));
    }
    onClickDecrementButton(){
        store.dispatch(Actions.decrement(this.props.caption));
    }
    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue,previousValue);
    }
    render(){
        const {caption} = this.props;
        const count = this.state.value
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count : {count}</span>
            </div>
        ); 
    }
}

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
};
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

export default Counter;


