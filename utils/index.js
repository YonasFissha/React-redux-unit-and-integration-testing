import checkPropTypes from "check-prop-types";
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
