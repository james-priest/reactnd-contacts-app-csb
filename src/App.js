import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: 'karen_isgrigg',
    avatarURL: 'avatars/karen.jpg'
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: 'richardkalehoff',
    avatarURL: 'avatars/richard.jpg'
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: 'tylermcginnis',
    avatarURL: 'avatars/tyler.jpg'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
