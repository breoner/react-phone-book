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

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  handleAdd = (newContact) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} вже існує у списку`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    
    const filterContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAdd} />

        <h2>Contacts</h2>
        <Filter 
          value={filter} 
          onChange={this.handleFilter} 
        />
        
        <ContactList 
          contacts={filterContact} 
          onDelete={this.handleDelete} 
        />
      </div>
    );
  }
}

export default App;