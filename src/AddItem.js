import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  //Initial state
  state = {
    newTaskText: ""
  }
  updateTaskText = (event) => {
    this.setState({
      newTaskText: event.target.value
    });
  }
  handleClick = () => {
    if(this.state.newTaskText === ""){
      alert("Please add a task first");
    }else{
      this.props.addTaskFunc(this.state.newTaskText);
      this.setState({
      newTaskText: "" 
      });
    }
  }
  render() {
    // JSX is NOT HTML
    return (
      <section>
        <input
          id="addItemInput"
          type="text"
          className="form-control"
          placeholder="E.g. take out bins (max 40 caracteres)"
          value={this.state.newTaskText}
          onChange={this.updateTaskText}
          maxLength="40" 
        />
        <div className="mt-3 mb-3">
          <button id="addButton" className="btn" onClick={this.handleClick}>
            Add to list
          </button>
        </div>
      </section>
    );
  }
}

export default AddItem;

