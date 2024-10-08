const initState = {
  products: null,
  categories: null,
  breweries: null
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ERROR":
      console.log("Get error");
      return {
        ...state
        // products: "Products failed"
      };

    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload.sort((a, b) =>
          Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1
        )
      };
    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload.sort((a, b) => (a.id > b.id ? 1 : -1))
      };
    case "GET_BREWERIES_SUCCESS":
      return {
        ...state,
        breweries: action.payload.sort((a, b) => (a.id > b.id ? 1 : -1))
      };

    default:
      return state;
  }
};

export default productsReducer;
