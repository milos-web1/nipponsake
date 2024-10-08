import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import {ReCaptcha} from 'react-recaptcha-google'

import {API} from "aws-amplify";

import './ContactForm.css';
import content from '../../locales/en/content.json';
import * as Utils from '../../utils/utils.js';
import * as Constant from '../../utils/constants.js';
import * as Mailer from '../../utils/mailer.js';


import {withTranslation} from 'react-i18next';

class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userMessage: {},
      errors: {},
      success: false,
      show: false,
      message: "",
      captcha:null
    }

  }

  validateForm() {
    let fields = this.state.userMessage;
    let errors = {};
    let formIsValid = true;


    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = content.contactus.emptyName;
      this.setState({errors: errors});
      return formIsValid
    }

    if (!fields["email"] || !Utils.validateEmailAddress(fields["email"])) {
      formIsValid = false;
      errors["email"] = content.contactus.emptyEmail;
      this.setState({errors: errors});
      return formIsValid
    }
    if (!fields["content"]) {
      formIsValid = false;
      errors["content"] = content.contactus.emptyMessage;
      this.setState({errors: errors});
      return formIsValid
    }
    if (this.state.captcha === null) {
      formIsValid = false;
      this.setState({errors: errors, show:true, message:"Please verify that you are not a robot"});
      return formIsValid
    }
    return formIsValid

  }

  handleChange = event => {
    let fields = this.state.userMessage;
    fields[event.target.id] = event.target.value;
    let errors = this.state.errors;
    errors[event.target.id] = ""
    this.setState({errors: errors});
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    if (this.validateForm()) {
      this.setState({isLoading: true});

      try {

        Mailer.sendMail('Nippon Sake [Contact Form Request]', 
          JSON.stringify(   {
            content: {
              name: this.state.userMessage["name"],
              email: this.state.userMessage["email"],
              message: this.state.userMessage["content"]
            }
          }, null, 2)  
        );

        // let response = await this.sendUserMessage({
        //   content: {
        //     name: this.state.userMessage["name"],
        //     email: this.state.userMessage["email"],
        //     message: this.state.userMessage["content"]
        //   }
        // });

        if (this.captchaDemo) {
          this.captchaDemo.reset();
        }
        this.setState({userMessage: this.setFeildsEmpty(),isLoading: false, success: true, show: true, message: "Thank you for contacting us. We will reply back to you shortly."});
      } catch (e) {
        //alert(e);
        this.setState({isLoading: false, success: false, show: true, message: "Message sent failed. Please try again."});
      }
    }

  }

  setFeildsEmpty = () => {
    let fields = this.state.userMessage;
 
      fields['name'] = "";
      fields['email'] = "";
      fields['content'] = "";
  
    return fields;
  }
  setShow = () => {
    this.setState({userMessage: this.setFeildsEmpty(), show: false});
  }
  showAlert() {
    return (<Alert style={{fontSize: '18px'}} variant={this.state.success
        ? 'success'
        : 'danger'} onClose={() => this.setShow()} dismissible="dismissible">
      {this.state.message}
    </Alert>)

  }
  sendUserMessage(note) {
    return API.post("contactus", "/contactus", {body: note});
  }

  componentDidMount() {
    if (this.captchaDemo) {
      //this.captchaDemo.reset();
      //this.captchaDemo.execute();
    }
  }
  onLoadRecaptcha=()=> {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      //this.captchaDemo.execute();
    }
  }
  verifyCallback=(recaptchaToken)=> {
    console.log(recaptchaToken, "<= your recaptcha token")
    // Here you will get the final recaptchaToken!!!
    this.setState({captcha:recaptchaToken, show:false, message:""})

  }

  render() {
    let fields = this.state.userMessage;
    const {t} = this.props;
    return (<div className="form">
      {this.state.show && this.showAlert()}

      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className="label-contact">{t('contactForm.yourName')}
          </Form.Label>
          <Form.Control type="text" placeholder={t('contactForm.yourName')} value={fields && fields["name"]} onChange={this.handleChange} className="input-text-style"/>
          <span className="error">{this.state.errors["name"]}</span>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="label-contact">{t('contactForm.email')}
          </Form.Label>
          <Form.Control type="email" value={fields && fields["email"]} onChange={this.handleChange} placeholder={t('contactForm.emailAddress')} className="input-text-style"/>
          <span className="error">{this.state.errors["email"]}</span>
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label className="label-contact">{t('contactForm.yourMessage')}
          </Form.Label>
          <Form.Control as="textarea" rows="3" placeholder={t('contactForm.typeHere')} className="input-text-style" value={fields && fields["content"]} onChange={this.handleChange}/>
          <span className="error">{this.state.errors["content"]}</span>
        </Form.Group>
        <span className="error">{this.state.errors["error"]}</span>

          <div>
            <ReCaptcha ref={(el) => {
                this.captchaDemo = el;
              }} size="compact" render="explicit" data-badge="inline" sitekey={Constant.CAPTCHA_SITE_KEY} onloadCallback={this.onLoadRecaptcha} verifyCallback={this.verifyCallback}/>
          </div>

        <Button onClick={this.handleSubmit} className="send-btn">
          {
            this.state.isLoading
              ? <div>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> {t('contactForm.sending')}
                </div>
              : <div>
                  {t('contactForm.send')}
                </div>
          }
        </Button>
      </Form>

    </div>)
  }

}

export default withTranslation()(ContactForm);
