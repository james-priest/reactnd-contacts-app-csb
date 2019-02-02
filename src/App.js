import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: [],
    screen: "create"
  };
  componentDidMount = () => {
    ContactsAPI.getAll().then(contacts => {
      this.setState(() => ({ contacts }));
    });
  };
  removeContact = contact => {
    ContactsAPI.remove(contact)
      .then(contact => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(c => c.id !== contact.id)
        }));
      })
      .catch(error => console.log("DB error"));
  };
  render() {
    return (
      <div>
        {this.state.screen === "list" && (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )}
        {this.state.screen === "create" && <CreateContact />}
      </div>
    );
  }
}

export default App;
