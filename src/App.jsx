import { Component } from "react";
import ContactForm from "./copmonents/ContactForm/ContactForm";
import Filter from "./copmonents/ContactForm/Filter/Filter";
import ContactList from "./copmonents/ContactForm/ContactList/ContactList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  handleFilter = (evt) => {
    this.setState({
      filter: evt.target.value,
    });
  };

  handleAdd = (newContact) => {
    const dublicateName = this.state.contacts.some(({ name }) => {
      return name.toLowerCase() === newContact.name.toLowerCase();
    });

    if (dublicateName) {
      alert(`${newContact.name} вже існує`);
      return;
    }

    this.setState((prevstate) => {
      return {
        contacts: [...prevstate.contacts, newContact],
      };
    });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAdd} />
        <Filter onChange={this.handleFilter} value={this.state.filter}  />
        <ContactList contacts={filterContact} onDelete={this.handleDelete} />
      </>
    );
  }
}

export default App;
