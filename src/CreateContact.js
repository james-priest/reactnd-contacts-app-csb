import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class CreateContact extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired
  };
  state = {
    toList: false
  };
  handleSubmit = contact => {
    this.props.onAddContact(contact).then(
      this.setState(() => ({
        toList: true
      }))
    );
  };
  render() {
    if (this.state.toList === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        Create Contact
        <br />
        <button
          onClick={() => {
            this.handleSubmit({
              id: "james",
              name: "James Priest",
              handle: "@james",
              avatarURL: "/james.jpg"
            });
          }}
        >
          Add Contact
        </button>
      </div>
    );
  }
}

export default CreateContact;
