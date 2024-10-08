import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Amplify from "aws-amplify";
import config from "./config";
import { loadReCaptcha } from "react-recaptcha-google";

import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhatIsSake from "./Components/WhatIsSake/WhatIsSake";
import Breweries from "./Components/Breweries/Breweries";
import BreweriesDetails from "./Components/BreweriesDetails/BreweriesDetails";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

import Footer from "./Components/Footer/Footer";

import * as Constant from "./utils/constants.js";
import {
  getProducts,
  getBreweries,
  getCategories
} from "./actions/productsActions";

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

class App extends React.Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getBreweries();
    this.props.getCategories();
    loadReCaptcha();
    Amplify.configure({
      API: {
        endpoints: [
          {
            name: "contactus",
            endpoint: config.apiGateway.URL,
            region: config.apiGateway.REGION
          }
        ]
      }
    });
  }

  render() {
    const { history, location } = this.props;
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" {...this.props} component={Home} />
          <Route
            exact
            path={Constant.routes_url.aboutUs}
            {...this.props}
            component={AboutUs}
          />
          <Route
            exact
            path={Constant.routes_url.products}
            {...this.props}
            component={Products}
          />
          <Route
            exact
            path={Constant.routes_url.breweries}
            {...this.props}
            component={Breweries}
          />
          <Route
            exact
            path={Constant.routes_url.whatIsSake}
            {...this.props}
            component={WhatIsSake}
          />
          <Route
            exact
            path={Constant.routes_url.contactUs}
            {...this.props}
            component={ContactUs}
          />
          <Route
            exact
            path={`${Constant.routes_url.breweryDetails}/:id`}
            {...this.props}
            component={BreweriesDetails}
          />
          <Route
            exact
            path={`${Constant.routes_url.productDetails}/:id`}
            {...this.props}
            component={ProductDetails}
          />
          <Route path="/404" component={NoMatchPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer history={this.props.history} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

// export default App;
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    getBreweries: () => dispatch(getBreweries()),
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
