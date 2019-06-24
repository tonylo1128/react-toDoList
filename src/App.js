import React from "react";
import HandleInput from "./HandleInput";
import ListCard from "./ListCard";
import "./App.css";
import { Button } from "react-bootstrap";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      toDoList:[],
      readOnlyControl: "readonly",
      editButtonClicked:0
    };
  }

  
  handleButtonAddItemOnClick() {
    const newList = this.state.toDoList;
    const listObj= {
      finishState:0,
      item:this.state.textInput
    };
    
    newList.push(listObj);
    
    this.setState({
      ...this.state,
      toDoList:newList,
    })
  }

  handleButtonAddItemOnClick2(item, index){
    console.log("Enter edit submit");
  
    const temp = this.state.toDoList;
    temp[index].item= this.state.textInput;

    
    var checkEdit = this.state.editButtonClicked;
    {checkEdit ==0 ? checkEdit=1:checkEdit=0}
    

    this.setState({
      ...this.state,
      toDoList:temp,
      editButtonClicked:checkEdit
    })
  }

  handleOnClickDelete(item, index){
    console.log("Enter the delete function");
    const temp = this.state.toDoList;
    console.log("this is the o-list ",temp);
    console.log("See what is in",item);
    const newTemp =temp.filter(trytry =>  trytry!==item);
    console.log(newTemp);
      console.log("this is the New-list ",newTemp);
    this.setState({
      ...this.state,
      toDoList: newTemp
    })
  }

  handleInputFunction(event) {
    const newValue = event.target.value;
    this.setState({
      ...this.state,
      textInput: newValue
    });
    console.log(this.state.textInput);
  }

  MakeAsDoneFun(item, index){
    const temp = this.state.toDoList;
    {temp[index].finishState ==0 ? 
      temp[index].finishState = 1: temp[index].finishState = 0;}
    this.setState({
      ...this.state.toDoList,
      listObj: temp 
    })

    
    
  }

  textAFun(){
    var check = this.state.readOnlyControl;
    
    console.log("Edit value ", checkEdit);
    console.log("state value", this.state.readOnlyControl);
    console.log("check value", check);
    if (check=="readonly"){
      check = "";
    }
    else{
      check = "readonly";
    }

    var checkEdit = this.state.editButtonClicked;
    {checkEdit ==0 ? checkEdit=1:checkEdit=0}
    console.log("check value after", check);
    
    this.setState({
      ...this.state,
      readOnlyControl:"",
      editButtonClicked:checkEdit
    })
    console.log("state value after", this.state.readOnlyControl);
    console.log("Edit value after", this.state.editButtonClicked);
  }

  render() {
    return (
      <div>
        <HandleInput
          value={this.state.textInput}
          sendFun={event => this.handleInputFunction(event)}
          sendFun2={() => this.handleButtonAddItemOnClick()}
        />

        <h1>The inputted text is: {this.state.textInput}</h1>

        <ListCard 
          sendList={this.state.toDoList} 
          sendAttr={this.state.readOnlyControl}
          sendEdit={this.state.editButtonClicked}
          sendFun={event => this.handleInputFunction(event)}
          sendFun21={(item, index) => this.handleButtonAddItemOnClick2(item, index)}
          sendDeleFun={(item, index)=>this.handleOnClickDelete(item, index)}
          sendMADFun ={(item, index)=>this.MakeAsDoneFun(item, index)}
          sendTextAFun={(item, index)=>this.textAFun(item, index)}/>
        
        {/* {this.state.toDoList.map ((item, index)=> <p key={index}>{index+1} . {item } </p>)} */}
      </div>
    );
  }
}

export default App;
