import { expect } from "chai";
import { mount } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Hangman from "@/components/Hangman.vue";
// import sinon from "ProgrammingThings/newexampleapp/node_modules/sinon/pkg/sinon-esm.js";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg)
  });
});

describe("Hangman.vue", () => {
  it("verifies that blankWordString is 6 chars long", () => {
    const hangman = "blank";
    const wrapper = shallowMount(Hangman, {
      propsData: { hangman }
    });
    expect(wrapper.props.hangman).to.include(hangman);
    //expect(wrapper.props.blankWordString).to.have.length(5);
  });
});

// describe("Click event", () => {
//   it('Click on A button calls our method with argument "A"', () => {
//     const spy = sinon.spy();
//     const wrapper = mount(Hangman, {
//       propsData: {
//         wrongGuesses: 
//       }
//     });
//     wrapper.find("button.test").trigger("click");

//     spy.should.have.been.calledWith("A");
//   });
// });