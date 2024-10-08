import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import * as Content from "../../locales/en/content.json";
import { connect } from "react-redux";
import { compose } from "redux";

import "./Categories.css";

import { withTranslation } from "react-i18next";

class Categories extends Component {
  render() {
    const { categories, selected, t, onCategoryChange } = this.props;

    return (
      <div className="category-container">
        <p className="category-title category-title-mobile-display-none">
          <a>
            {t("categories.categories")}
          </a>
        </p>
        <div className="line mobile-list-group-none" />

        <ListGroup className="mobile-list-group-none">
          {categories && categories.map((categoriesItems, i) => (
            <ListGroup.Item
              key={i}
              className={selected.toString() === i.toString() ? "list-item-select" : ""}
              onClick={() => onCategoryChange(i)}
            >
              {Content.category[categoriesItems.name]}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <select
          className="select-category-mobile select-category-style"
          id="categorySelect"
          value={selected}
          onChange={({ target: { value } }) => onCategoryChange(value)}
        >
          <option key={1001} value="default">
            Categories
          </option>
          {categories && categories.map((category, i) => (
            <option
              key={i}
              value={i}
            >
              {Content.category[category.name]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    categories: state.data.categories
  };
};

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(Categories);
