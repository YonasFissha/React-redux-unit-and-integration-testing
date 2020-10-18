import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import { findByTestAttr, testStore } from "../utils";
Enzyme.configure({ adapter: new Adapter() });
const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe("App component", () => {
  let component;
  beforeEach(() => {
    const initalState = {
      postsReducer: [
        {
          title: "title 1",
          body: "desc 1",
        },
        {
          title: "title 3",
          body: "desc 3",
        },
        {
          title: "title 3",
          body: "desc 3",
        },
      ],
    };
    component = setup(initalState);
  });
  it("should render without error", () => {
    const app = findByTestAttr(component, "appComponent");
    expect(app.length).toBe(1);
  });
});
