import React,{Component,PropTypes} from 'react';
import * as Actions from '../Actions';
import CounterStore from '../store/CounterStore';

const buttonStyle = {
    margin: '10px'
}
class Counter extends Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.caption !== this.props.caption) || 
        (nextState.count !== this.state.count)
    }
    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }
    onClickIncrementButton(){
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton(){
        Actions.decrement(this.props.caption);
    }
    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }
    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue,previousValue);
    }
    render(){
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count : {this.state.count}</span>
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


