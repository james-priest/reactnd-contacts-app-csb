import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import ImageInput from "./ImageInput";

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
        <Link className="close-create-contact" to="/">
          Close
        </Link>
        <form className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="name" placeholder="Handle" />
            <button>Add Contact</button>
          </div>
        </form>
        {/*<button
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
        </button>*/}
      </div>
    );
  }
}

export default CreateContact;
