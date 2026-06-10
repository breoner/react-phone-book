import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import style from "./ContactList.module.css";

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={style.list}>
        <p className={style.contact}>Contacts</p>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
