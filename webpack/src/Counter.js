import React,{Component,PropTypes} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: props.initValue
        }
    }
    onClickIncrementButton(){
        this.updateCount(true);
    }
    onClickDecrementButton(){
        this.updateCount(false);
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
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
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


