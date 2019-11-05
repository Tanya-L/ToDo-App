import React from "react";
import "./App.css";
import ListItems from "./components/ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        done: false
      }
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdateText = this.setUpdateText.bind(this);
    this.setUpdateDone = this.setUpdateDone.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem]; //destructuring Assignment
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  }

  handleInput(e) {
    e.persist();
    this.setState(s => {
      s.currentItem = {
        text: e.target.value,
        key: Date.now()
      };
      return s;
    });
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  setUpdateText(text, key) {
    // console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        // console.log(item.key + "    " + key);
        item.text = text;
      }
      return text;
    });
    this.setState({
      items: items
    });
  }

  setUpdateDone(key) {
    var newItems = this.state.items.map(item => {
      if (item.key === key) {
        item.checked = !item.checked;
        // item.filter = item.filter !== 'Done' ? "Done" : "All done";
      }
      return item;
    });
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo</h1>
          <form id="todo-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>

            <button type="submit">Add #{this.state.items.length + 1}</button>
          </form>
          <p>{this.state.items.text}</p>
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdateText={this.setUpdateText}
            setUpdateDone={this.setUpdateDone}
          ></ListItems>
        </header>
      </div>
    );
  }
}

export default App;
