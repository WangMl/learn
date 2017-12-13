import React,{Component} from 'react';
import Counter from './Counter';
import Summary from './Summary';

class ControlPanel extends Component{
    constructor(props){
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initVaues = [0,10,20];
        const initSum = this.initVaues.reduce((a,b)=>a+b,0);
        this.state = {
            sum: initSum
        };

    }
    onCounterUpdate(newValue,previousValue){
       const valueChange = newValue - previousValue;
       this.setState({sum:this.state.sum + valueChange});
    }

    render(){
        return (
            <div>
                <div>
                    <Counter caption="First" />
                    <Counter caption="Second" />
                    <Counter caption="Third" />
                </div>
                <Summary/>
            </div>
        );
    }
}

export default ControlPanel;