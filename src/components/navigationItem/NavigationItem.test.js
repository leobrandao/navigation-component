import React from "react";
import { shallow } from "enzyme";
import NavigationItem from "./NavigationItem";

describe("<NavigationItem />", () => {
  it("should render an anchor tag with href attribute", () => {
    const wrapper = shallow(
      <NavigationItem section="test" handleClick={jest.fn()} />
    );
    expect(wrapper.find("a").first()).toHaveLength(1);
    expect(wrapper.find("a").first().prop("href")).toEqual("#test");
  });

  it("should render a span with text content", () => {
    const wrapper = shallow(
      <NavigationItem section="test" label="Test" handleClick={jest.fn()} />
    );
    expect(wrapper.find("span").first()).toHaveLength(1);
    expect(wrapper.find("span").first().text()).toEqual("Test");
  });

  it("should render a anchor tage with a class", () => {
    const wrapper = shallow(
      <NavigationItem
        className="active"
        section="test"
        handleClick={jest.fn()}
      />
    );
    expect(wrapper.find("a").first()).toHaveLength(1);
    expect(wrapper.find("a").first().hasClass("active")).toEqual(true);
  });

  it("should render a anchor tage with onClick handler function", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <NavigationItem className="active" section="test" handleClick={onClick} />
    );
    const anchor = wrapper.find("a");
    expect(anchor).toHaveLength(1);
    anchor.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
