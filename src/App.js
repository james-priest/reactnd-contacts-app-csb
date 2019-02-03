import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: []
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
  addContact = contact => {
    console.log("Contact added", contact);
    return new Promise((resolve, reject) => resolve());
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          render={() => <CreateContact onAddContact={this.addContact} />}
        />
      </div>
    );
  }
}

export default App;
