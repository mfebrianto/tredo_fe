import React from 'react';
import RegistrationForm from '../forms/RegistrationForm';
import TopBarMenu from '../commons/TopBarMenu';
import FooterBar from '../commons/FooterBar';

class RegistrationPage extends React.Component {

  render() {
    return (
      <div>
        
        <RegistrationForm/>
        
        <FooterBar/>
      </div>
    );
  }

}

export default RegistrationPage;