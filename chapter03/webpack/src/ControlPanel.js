import React,{Component} from 'react';
import Counter from './Counter';

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
                    <Counter caption="First" initValue={this.initVaues[0]} onUpdate={this.onCounterUpdate}/>
                    <Counter caption="Second" initValue={this.initVaues[1]} onUpdate={this.onCounterUpdate}/>
                    <Counter caption="Third" initValue={this.initVaues[2]} onUpdate={this.onCounterUpdate}/>
                </div>
                <div>Total Count: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;