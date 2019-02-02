import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateContact extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired
  };
  render() {
    const { onAddContact } = this.props;
    return (
      <div>
        Create Contact
        <button
          onClick={() => {
            onAddContact({
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
