import React from "react";
import { shallow, mount } from "enzyme";
import NavigationBar from "./NavigationBar";

describe("<NavigationBar />", () => {
  it("should render NavigationBar with one item", () => {
    const cities = [
      {
        section: "sunnyvalle",
        label: "Sunnyvalle",
      },
    ];
    const wrapper = shallow(<NavigationBar navigationData={cities} />);
    expect(wrapper.find("NavigationItem")).toHaveLength(1);
  });

  it("should render NavigationBar with one item", () => {
    const cities = [
      {
        section: "sunnyvalle",
        label: "Sunnyvalle",
      },
    ];
    const wrapper = shallow(<NavigationBar navigationData={cities} />);
    const navigationIten = wrapper.find("NavigationItem");
    expect(navigationIten).toHaveLength(1);
    expect(navigationIten.first().prop("label")).toEqual("Sunnyvalle");
    expect(navigationIten.first().prop("section")).toEqual("sunnyvalle");
  });

  it("should render NavigationBar with one item", () => {
    const cities = [
      {
        section: "sunnyvalle",
        label: "Sunnyvalle",
      },
    ];
    const wrapper = mount(<NavigationBar navigationData={cities} />);
    const span = wrapper.find("span");
    let anchor = wrapper.find("a");
    anchor.simulate("click");
    expect(wrapper.state().selectedCity).toEqual(cities[0].section);
    wrapper.update();
    anchor = wrapper.find("a");
    expect(anchor.hasClass("selected")).toEqual(true);
  });
});
