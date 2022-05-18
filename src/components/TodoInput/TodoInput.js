import React, { Component } from "react";
import styles from "./TodoInput.module.scss";

export class TodoInput extends Component {
  render() {
    const { item, editItem, handleChange, handleSubmit } = this.props;
    return (
      <section className={styles.Section}>
        <h1>Todo Input</h1>
        <form onSubmit={handleSubmit} className={styles.Form}>
          <div>
            <span>
              <i className="fa-solid fa-book"></i>
            </span>
            <input type="text" value={item} onChange={handleChange} />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={editItem ? styles.Green : styles.Blue}
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </section>
    );
  }
}

export default TodoInput;
