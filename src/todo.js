import React from "react";
import "./todo.css";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      write: "",
      items: [],
      date: new Date().toLocaleTimeString(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({
      write: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.write],
    });
  }
  displayTodo() {
    return this.state.items.map((item) => {
      return (
        <div className="todolist" key={item}>
          <p>{item}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='todo'>
        <div className="header">
          <input
            value={this.state.write}
            onChange={this.handleChange}
            type="text"
            placeholder="write here"
          />
          <button className="add" onClick={this.addTodo}>
            Ajouter
          </button>
        </div>
        <div className='displaytodo'>{this.displayTodo()}</div>
      </div>
    );
  }
}

export default Todo;
