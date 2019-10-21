import React from "react";
import "./Item.css";

class Item extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
            <span className={this.props.completed ? "completedItem" : ""}>
              {this.props.text}
            </span>
          </div>
          <div className="col-2">
            <button className="btn btn-info">Delete</button>
          </div>
          <div className="col-2">
            {this.props.completed === false && <button className="btn btn-light">Done</button>}
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
