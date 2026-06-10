import { Component } from "react";
import { nanoid } from "nanoid";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (evt) => {
    const { value, name } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  handleSumbit = (evt) => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(newContact);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSumbit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"
          />
        </label>

        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Enter phone number"
          />
        </label>

        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;