import React,{Component} from 'react';

class Forms extends Component{
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : "",
            isFriendly : false,
            gender : "",
            colour : "blue"
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    // handleEventOtherWay(event){
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     });
    // }

    //Other way to handle event using const
    handleEvent(event){
        const {name,value,type,checked} = event.target;
        type === "checkbox" ?  this.setState({[name] : checked}) : this.setState({[name] : value})
        

    }

    render(){
        return(
            <form>
                <input 
                    type = "text"
                    name = "firstName" 
                    value = {this.state.firstName}
                    placeholder = "First Name" 
                    onChange = {this.handleEvent}>
                </input>
                <br/>
                <input 
                    type = "text" 
                    name = "lastName" 
                    value = {this.state.lastName} 
                    placeholder = "Last Name" 
                    onChange = {this.handleEvent}>
                </input>
                <br />

                {/* <textarea>
                    value = {"Some default Text"}
                </textarea> */}

                <label>
                    <input 
                        type = "checkbox" 
                        name = "isFriendly" 
                        checked = {this.state.isFriendly}
                        onChange = {this.handleEvent}
                    />Is Friendly?
                </label>
                <br />

                <label>
                    <input 
                        type = "radio" 
                        name = "gender" 
                        value = "male"
                        checked = {this.state.gender === "male"}
                        onChange = {this.handleEvent}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type = "radio" 
                        name= "gender" 
                        value = "female"
                        checked = {this.state.gender === "female"}
                        onChange = {this.handleEvent}
                    /> Fenale
                </label>
                <br />
                <label>
                    <select 
                        name = "colour" 
                        value = {this.state.colour} 
                        onChange = {this.handleEvent}
                    >
                        <option value = "blue">Blue</option>
                        <option value = "green">Green</option>
                        <option value = "yellow">Yellow</option>
                        <option value = "red">Red</option>
                        <option value = "orange">Orange</option>
                    </select>
                </label>
                <br />

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>Selected Gender is {this.state.gender}</h1>
                <h1>Selected colour is {this.state.colour}</h1>
            </form>
        )
    }

}



export default Forms;