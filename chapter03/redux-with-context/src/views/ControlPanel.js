import React,{Component} from 'react';
import Counter from './Counter';
import Summary from './Summary';


class ControlPanel extends Component{
    render(){
        return (
            <div>
                <div>
                    <Counter caption="First"/>
                    <Counter caption="Second"/>
                    <Counter caption="Third"/>
                </div>
                <Summary/>
            </div>
        );
    }
}

export default ControlPanel;