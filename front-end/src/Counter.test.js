import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Counter from "./components/Counter";


Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without error', () => {
    const wrapper = shallow(<Counter />);
    const appComponent = wrapper.find("[data-test='component-app']")
    expect(appComponent.length).toBe(1)
});
test("renders increment button", () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find("[data-test='increment-button']")
    expect(button.length).toBe(1)
})
test("renders counter display", () => {

})
test("counter starts at 0", () => {

})
test("clicking button increments counter", () => {

})
