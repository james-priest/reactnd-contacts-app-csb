import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: [],
    screen: "list"
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
    this.setState(() => ({
      screen: "list"
    }));
  };
  render() {
    return (
      <div>
        {this.state.screen === "list" && (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            onNavigate={() => {
              this.setState({ screen: "create" });
            }}
          />
        )}
        {this.state.screen === "create" && (
          <CreateContact onAddContact={this.addContact} />
        )}
      </div>
    );
  }
}

export default App;
