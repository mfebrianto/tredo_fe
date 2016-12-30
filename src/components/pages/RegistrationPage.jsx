import React from 'react';
import RegistrationForm from '../forms/RegistrationForm';
import TopBarMenu from '../commons/TopBarMenu';

class RegistrationPage extends React.Component {

  render() {
    return (
      <div>
        <TopBarMenu/>
        <RegistrationForm/>
      </div>
    );
  }

}

export default RegistrationPage;