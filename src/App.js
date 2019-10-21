import React from "react";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [
      {text: "walk the cat", completed: true, date: "2019-10-16"},
      {text: "buy oats", completed: false, date: "2019-10-17"},
      {text: "learn React", completed: false, date: "2019-10-18"},
      {text: "wash slippers", completed: true, date: "2019-10-20"},
      {text: "de-flea the cat", completed: false, date: "2019-10-30"},
      {text: "create instagram account for cat", completed: true, date: "2019-11-06"}
    ]
  }
  //Function to update the tasks with a new task
  addTask = (taskText) => {
    console.log(taskText);
    //Create a new task with default completed and date propeties

    //Add that task to the state
  }
  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List</h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem />
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={this.state.tasks.length} />
            <ul id="itemList">
              {this.state.tasks.map(item => {
                return <Item text={item.text} completed={item.completed} date={item.date} />
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
