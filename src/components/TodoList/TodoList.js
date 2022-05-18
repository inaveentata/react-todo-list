import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

export class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete, handleClear } = this.props;
    return (
      <section className={styles.Section}>
        <h1>Todo List</h1>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            title={item.title}
          />
        ))}
        <button onClick={handleClear}>Clear All</button>
      </section>
    );
  }
}

export default TodoList;
