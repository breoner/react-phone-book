import { Component } from "react";
import style from "./ContactItem.module.css";

class ContactItem extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;

    return (
      <li className={style.item}>
        <span className={style.info}>
          <strong>{name}</strong>: {number}
        </span>

        <button
          className={style.button}
          type="button"
          onClick={() => onDelete(id)}
        >
          Видалити
        </button>
      </li>
    );
  }
}

export default ContactItem;
