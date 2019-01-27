import React from 'react'
import {Header, Modal} from 'semantic-ui-react'

const AddModal = () => (
  <Modal trigger={<div onClick={(e) => e.preventDefault()} class="ui fluid large teal submit button">Login</div>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default AddModal