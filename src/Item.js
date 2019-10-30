import React from "react";
import "./Item.css";

class Item extends React.Component {
  handleDelete = e => {
    this.props.deleteTaskFunc(this.props.id);
  }
  handleCheck = e => {
    this.props.checkTaskFunc(this.props.id);
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
            <span className={this.props.completed ? "completedItem" : ""}>
              {this.props.text} {this.props.date}
            </span>
          </div>
          <div className="col-2">
            <i className="fas fa-trash"  onClick={this.handleDelete}/>
          </div>
          <div className="col-2">
            {this.props.completed ? 
              <i className="fas fa-undo" /> : 
              <i className="fas fa-check greenCheck" onClick={this.handleCheck}/>
            }
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
