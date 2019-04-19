import React, {Component} from 'react';


class ClassHeaderComponent extends Component{
    constructor(){
        super();
        this.state = {
            answer : false
        }
    }

    render(){
        let displayAnswer;
        if(this.state.answer){
            displayAnswer = "yes";
        }else{
            displayAnswer = "No";
        }
        return(
            <div>Welcome {this.props.username} with new user? {displayAnswer}</div>
        )
    }

}


export default ClassHeaderComponent;