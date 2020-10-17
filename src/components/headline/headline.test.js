import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Headline from "./index";
import { findByTestAttr } from "../../../utils";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("headline component", () => {
  describe("with out props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it("should render without errors", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(1);
    });
    it("should not render header", () => {
      const header = findByTestAttr(component, "header");
      expect(header.length).toBe(0);
    });
    it("should render description", () => {
      const desc = findByTestAttr(component, "desc");
      expect(desc.length).toBe(1);
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
      expect(header.length).toBe(1);
    });
    it("should render description", () => {
      const description = findByTestAttr(component, "desc");
      expect(description.length).toBe(1);
    });
  });
});
