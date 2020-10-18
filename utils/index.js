import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import postsReducer from "../src/store/reducers";
import { middlewares } from "../src/store/store";
export const findByTestAttr = (component, att) => {
  const wrapper = component.find(`[data-test='${att}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsError;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleWare(postsReducer, initialState);
};
