import React from "react";
import "../../style/style.css";
//import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownList.css";
//import {withNamespaces} from 'react-i18next';

import * as LocalizedStrings from "../../locales/en/content.json";
//import * as Constant from '../../utils/constants.js'

import * as Utils from "../../utils/utils.js";

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "en"
    };
  }

  changeLanguageHandler = event => {
    event.preventDefault();
    const value = event.target.id;
    this.setState({ value: value });
    Utils.changeLanguage(value);
  };

  render() {
    let currentlang = Utils.getCurrentLanguage();
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle>{currentlang.toUpperCase()}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              id={LocalizedStrings.lng.en}
              onClick={this.changeLanguageHandler}
            >
              {LocalizedStrings.lng.en}
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-1"
              id={LocalizedStrings.lng.ja}
              onClick={this.changeLanguageHandler}
            >
              {LocalizedStrings.lng.ja}
            </Dropdown.Item>
            {/* <Dropdown.Item
              href="#/action-2"
              id={LocalizedStrings.lng.za}
              onClick={this.changeLanguageHandler}
            >
              {LocalizedStrings.lng.za}
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              id={LocalizedStrings.lng.ko}
              onClick={this.changeLanguageHandler}
            >
              {LocalizedStrings.lng.ko}
            </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownList;
