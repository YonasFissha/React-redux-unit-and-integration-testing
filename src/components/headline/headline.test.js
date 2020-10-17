import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import checkPropTypes from "check-prop-types";

import Headline from "./index";
import { findByTestAttr, checkProps } from "../../../utils";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("headline component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
      };
      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("with out props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should not render", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "test headline",
        desc: "text desc",
      };
      component = setup(props);
    });
    it("should render without errors", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(1);
    });
    it("should render header", () => {
      const header = findByTestAttr(component, "header");
      console.log(header.debug());
      expect(header.length).toBe(1);
    });
    it("should render description", () => {
      const description = findByTestAttr(component, "desc");
      expect(description.length).toBe(1);
    });
  });
});
