import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      value:'',
      valueArray:[],
      completeArray:[]
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event){
    this.setState({
      value:event.target.value
    });
  }
  handleSubmit(event){
    this.setState({
      valueArray:[...this.state.valueArray,this.state.value]
    })
    event.preventDefault();
  }
  completeItem(valueToComplete,i){
    console.log(i)
    let changedArray = this.state.valueArray.filter((item,index)=>{
       return i !== index
    })
    console.log(changedArray);
    this.setState({
      completeArray:[...this.state.completeArray,valueToComplete],
      valueArray:changedArray
    })
  }
  render() {
    return (
      <div style={{backgroundColor:"blue",height:"100vh"}}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />  
          <button style={{backgroundColor:"green"}} type="Submit" value="Submit">Add</button> 
        </form>
        <div>
          <h3 style={{backgroundColor:"purple", textAlign:"center"}}>Pending Items</h3>
          <ul>
              {
                this.state.valueArray.map((item,i)=>{
                  return(
                    <li key={i}>
                      {item} <span><button onClick={() =>{this.completeItem(item,i)} }>Complete</button></span>
                    </li>
                  )
                })
              }
          </ul>
        </div>
        <div>
        <h3 style={{backgroundColor:"purple", textAlign:"center"}}>Pending Items</h3>
          <ul>
              {
                this.state.completeArray.map((completeItem,i)=>{
                  return(
                    <li key={i}>
                      {completeItem} 
                    </li>
                  )
                })
              }
          </ul>
        </div>
    </div>
    )
  }      
}

export default App;
