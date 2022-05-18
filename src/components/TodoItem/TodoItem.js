import React, { Component } from "react";
import styles from './TodoItem.module.scss'

export class TodoItem extends Component {
  render() {
    const { title, id, handleEdit, handleDelete } = this.props;
    return (
      <article className={styles.Article}>
            <p>{title}</p>
            <div>
                <span className={styles.Edit} onClick={()=>handleEdit(id)}><i className="fa-solid fa-pen-to-square"></i></span>
                <span className={styles.Delete} onClick={()=>handleDelete(id)}><i className="fa-solid fa-trash"></i></span>
            </div>
      </article>
    );
  }
}

export default TodoItem;
