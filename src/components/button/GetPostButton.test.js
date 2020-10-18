import Enzyme, { shallow } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "../../../utils";
import GetPostButton from "./component";
Enzyme.configure({ adapter: new Adapter() });
describe("Get Posts button component test", () => {
  describe("checking propTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Sample text",
      };
      const propErrors = checkProps(GetPostButton, expectedProps);
      expect(propErrors).toBeUndefined();
    });
  });
  describe("should render a button", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Sample text",
        fetchPosts: () => {},
      };
      wrapper = shallow(<GetPostButton {...props} />);
    });
    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "getPostButton");
      expect(button.length).toBe(1);
    });
  });
});
