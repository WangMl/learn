import React, {Component,PropTypes} from 'react';

class Summary extends Component{
    render(){
        const {sum} = this.props;
        return(
            <div>Total Count: {sum}</div>
        );
    }
}

class SummaryContainer extends Component{
    constructor(props,context){
        super(props,context);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }
   
    onChange(){
       this.setState(this.getOwnState());
    }

    getOwnState(){
        const state = this.context.store.getState();
        let sum = 0;
        for(let key in state){
            if(state.hasOwnProperty(key)){
                sum += state[key];
            }
        }
        return {sum:sum};
    }

    componentDidMount(){
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        this.context.store.unsubscribe(this.onChange);
    } 

    shouldComponentUpdate(nextProps,nextState){
        return nextState !== this.state.sum;
    }

    render(){
        return(
            <Summary sum={this.state.sum}/>
        );
    }
}

SummaryContainer.contextTypes={
    store: PropTypes.object
}
export default SummaryContainer;