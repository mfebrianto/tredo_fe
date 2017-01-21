import '../../assets/stylesheets/registration.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Grid } from 'react-bootstrap';
import { Form, Field, Errors } from 'react-redux-form';
import validator from 'validator';

// import { submitUser } from '../services/submitUser'

import T from 'i18n-react';

const passwordMatch = (password, confirmation) => {
  let result = true;
  if (confirmation != null && confirmation.length > 0) {
    result = password === confirmation;
  }
  return result;
}

class RegistrationForm extends React.Component {

  // handleSubmit() {
  //   let { user, dispatch } = this.props;

  // const source = submitUser('http://localhost/api/auth');
  //
  // source.subscribe({next: x => console.log(x),
  //   error: error => console.error(error),
  //   complete: () => console.log('done')});

  //   console.log("clicked");
  // }

  render() {
    const { user } = this.props;

    return (
    
    <div>
    <div className="tredo-registration-header">
    <div className="Tredologodiv"></div>
    <h3>Register new user</h3>
    <p>lorem ipsum dolor siamet</p>
    </div>
      <div className="tredo-registration-white">
    

      <div className="tredo-registration-wrapper">
        
        <h3>Create your account to identify yourself</h3>
        <Form model="user" onSubmit={() => this.handleSubmit()}>
          <div className="registration-input">
            <label>{ T.translate("registration.email") }</label>
            <Field model="user.email"
                   validators={{
                     required: (val) => val && val.length,
                     valid: validator.isEmail
                   }}
                   validateOn="blur">
              <input className="form" type="email" />
            </Field>
            <Errors model="user.email"
                  show={{ touched: true, focus: false }}
                  messages={{
                    required: 'Please provide an email address.',
                    valid: (val) => `${val} is not a valid email.`,
                  }}/>
          </div>
          

          <div className="registration-input">
            <label>{ T.translate("registration.password") }</label>
            <Field model="user.password"
                   validators={{
                     required: (val) => val && val.length,
                     passwordMatch: (val) => passwordMatch(val, user.passwordConfirmation)
                   }}
                   validateOn="blur">
              <input className="form" type="password" />
            </Field>
            <Errors model="user.password"
                  show={{ touched: true, focus: false }}
                  messages={{
                    required: 'Please put in your password.',
                    passwordMatch: 'Must same with password confirmation'
                  }}/>
          </div>
          

          <div className="registration-input">
            <label>{ T.translate("registration.confirm_password") }</label>
            <Field model="user.passwordConfirmation"
                   validators={{
                     required: (val) => val && val.length,
                     passwordMatch: (val) => passwordMatch(user.password, val)
                   }}
                   validateOn="blur">
              <input className="form" type="password" />
            </Field>
            <Errors model="user.passwordConfirmation"
                  show={{ touched: true, focus: false }}
                  messages={{
                    required: 'Please confirm your password',
                    passwordMatch: 'Must same with password'
                  }}/>
          </div>

          <div>
            <p>By signing up, I agree to Tredo Terms of Service Nondiscrimination Policy, Payments Terms of Service, Privacy Policy and Guest Refund Policy</p>
          </div>
          
         
          <Button type="submit" className="form-btn semibold">
            { T.translate("registration.submit") }
          </Button>
          
          
          <Row>
          <Col md={6} className="FBdiv"> <a href="#">Continue with Facebook </a></Col>
          <Col md={6} className="Googlediv"> <a href="#"> Continue with Google </a> </Col>
          </Row>
          

        </Form>
      </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(RegistrationForm);