import React from "react";
import uuid from "uuid/v4";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [
      {text: "walk the cat", completed: true, date: "2019-10-16", id: uuid()},
      {text: "buy oats", completed: false, date: "2019-10-17", id: uuid()},
      {text: "learn React", completed: false, date: "2019-10-18", id: uuid()},
      {text: "wash slippers", completed: true, date: "2019-10-20", id: uuid()},
      {text: "de-flea the cat", completed: false, date: "2019-10-30", id: uuid()},
      {text: "create instagram account for cat", completed: true, date: "2019-11-06", id: uuid()}
    ]
  }
  //Function to update the tasks with a new task
  addTask = (taskText) => {
    console.log(taskText);
    //Create a new task with default completed and date propeties
    const newTask = {
      text: taskText,
      completed: false,
      date: "2019-10-21",
      id: uuid()
    };
    //Add that task to the state
    //Never do this.state.tasks.push(item) and access state directly 
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    });
  }
  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List</h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem addTaskFunc={this.addTask} />
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={this.state.tasks.length} />
            <ul id="itemList">
              {this.state.tasks.map(item => {
                return <Item key={item.id} text={item.text} completed={item.completed} date={item.date} />
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
