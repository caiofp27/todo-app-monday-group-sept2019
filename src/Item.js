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
            <i className="fas fa-trash" />
          </div>
          <div className="col-2">
            {this.props.completed ? 
              <i className="fas fa-undo" /> : 
              <i className="fas fa-check greenCheck" />
            }
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
