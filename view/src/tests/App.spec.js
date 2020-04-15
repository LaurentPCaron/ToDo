import React from "react";
import { shallow } from "enzyme";

import App from "../components/App";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render have a <Header/>", () => {
    expect(wrapper.containsMatchingElement("<Header/>")).toEquel(true);
  });

  it("shoul have something", () => {
    expect(wrapper.containsMatchingElement());
  });
});
