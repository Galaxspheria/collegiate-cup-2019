import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownCategories = () => (
  <Dropdown text='Choose'>
    <Dropdown.Menu>
      <Dropdown.Item text='Website Design' />
      <Dropdown.Item text='Android App Development'/>
      <Dropdown.Item text='IOS App development'/>
      <Dropdown.Item text='Data Processing'/>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownCategories