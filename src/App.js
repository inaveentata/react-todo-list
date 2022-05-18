import React, { Component } from "react";
import { v1 as uuid } from "uuid";
import styles from "./App.module.scss";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      item: "",
      id: uuid(),
      editItem: false,
    };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    this.setState({
      items: [...this.state.items, newItem],
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  handleEdit = (id) => {
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    const itemEdit = this.state.items.find(item => item.id === id)
    this.setState({
      items: sortedItems,
      item: itemEdit.title,
      id: itemEdit.id,
      editItem:true
    })

  };
  handleDelete = (id) => {
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: sortedItems });
  };
  handleClear = () => {
    this.setState({ items: [] });
  };

  render() {
    return (
      <main className={styles.App}>
        <TodoInput
          item={this.state.item}
          editItem={this.state.editItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          items={this.state.items}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleClear={this.handleClear}
        />
      </main>
    );
  }
}

export default App;
