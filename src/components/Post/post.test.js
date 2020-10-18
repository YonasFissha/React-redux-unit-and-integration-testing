import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "../../../utils";
import Post from "./index";
Enzyme.configure({ adapter: new Adapter() });
describe("Post component", () => {
  describe("propTypes should now throw warning", () => {
    it("prop types should not throw warning", () => {
      const expectedProps = {
        title: "Post 1",
        desc: "Post 1 description",
      };
      const propErros = checkProps(Post, expectedProps);
      expect(propErros).toBeUndefined();
    });
  });
  describe("should render component", () => {
    let component;
    beforeEach(() => {
      const expectedProps = {
        title: "Post 1",
        desc: "Post 1 description",
      };
      component = shallow(<Post {...expectedProps} />);
    });
    it("should render post component", () => {
      const main = findByTestAttr(component, "buttonComponent");
      expect(main.length).toBe(1);
    });

    it("should render title", () => {
      const title = findByTestAttr(component, "title");
      expect(title.length).toBe(1);
    });
    it("should render description", () => {
      const desc = findByTestAttr(component, "desc");
      expect(desc.length).toBe(1);
    });
  });
});
