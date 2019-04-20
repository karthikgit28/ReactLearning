import React,{Component} from 'react';
import productList from './productsList';
import ClassHeaderObject from './ClassHeaderObject';


class ClassComponentObject extends Component{
    constructor(){
        super();
        this.state = {
            list: productList
        }
    }
    render(){
        const newList = this.state.list.map(item => <ClassHeaderObject key ={item.id} item = {item} />);
        return(
            <div>{newList}</div>
        )
    }
}

export default ClassComponentObject;