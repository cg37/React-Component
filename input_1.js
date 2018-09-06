import React, { Component } from 'react'

class ChildCom extends Component{
    constructor(props){
        super(props);
        this.state={
            state_1:'name',
            state_2:'gender',
            state_3:'age',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleClick=()=>{
        console.log(this.state)
    }
    handleBlur=()=>{
        this.props.getinfo(this.state)
    }
render(){
    return(
    <div>
        <br/>
        &nbsp;{this.props.Student}
        <br/>
        &nbsp;<input  value={this.state.state_1} 
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                name='state_1'/>
        <br/>
        &nbsp;<input  value={this.state.state_2} 
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                name='state_2'/>
        <br/>
        &nbsp;<input  value={this.state.state_3} 
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                name='state_3'/>
        <br/>
        &nbsp;<button onClick={this.handleClick}>log state</button>
    </div>
    )}    
}
class ParentCom extends Component{
    constructor(props){
        super(props);
        this.state={
            info_1:'Head',
        }
    }
    getinfo=(data)=>{
        this.setState({infoget:data})
    }
    handleSubmit=()=>{
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <ChildCom
                        Student={this.state.info_1} 
                        getinfo={this.getinfo} />
                &nbsp;{<button onClick={this.handleSubmit}>submit</button>}
            </div>
        )
    }
} 
export default ParentCom