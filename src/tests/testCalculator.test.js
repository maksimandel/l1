import { mount } from '@vue/test-utils';
import Calc from '../views/Calc.vue';

// eslint-disable-next-line no-undef
describe('Calculator testing', () => {
  // eslint-disable-next-line no-undef
  it('Test first operand', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    op1Input.setValue(1);

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op1).toBe(1);
  });

  // eslint-disable-next-line no-undef
  it('Test second operand', () => {
    const wrapper = mount(Calc);
    const op2Input = wrapper.find('input[name=op2]');
    op2Input.setValue(2);

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op2).toBe(2);
  });

  // eslint-disable-next-line no-undef
  it('Test sum method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const sumButton = wrapper.find('button[name="+"]');

    op1Input.setValue(1);
    op2Input.setValue(2);
    sumButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(3);
  });

  // eslint-disable-next-line no-undef
  it('Test div method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const divButton = wrapper.find('button[name="/"]');

    op1Input.setValue(4);
    op2Input.setValue(2);
    divButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(2);
  });

  // eslint-disable-next-line no-undef
  it('Test sub method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const subButton = wrapper.find('button[name="-"]');

    op1Input.setValue(4);
    op2Input.setValue(2);
    subButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(2);
  });

  // eslint-disable-next-line no-undef
  it('Test mult method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const multButton = wrapper.find('button[name="*"]');

    op1Input.setValue(4);
    op2Input.setValue(2);
    multButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(8);
  });

  // eslint-disable-next-line no-undef
  it('Test pow method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const powButton = wrapper.find('button[name="^"]');

    op1Input.setValue(2);
    op2Input.setValue(3);
    powButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(8);
  });

  // eslint-disable-next-line no-undef
  it('Test trunc method', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const op2Input = wrapper.find('input[name=op2]');
    const truncButton = wrapper.find('button[name="%"]');

    op1Input.setValue(5);
    op2Input.setValue(3);
    truncButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(1);
  });

  // eslint-disable-next-line no-undef
  it('On-screen keyboard', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const keyboardButton = wrapper.find('button[name="5"]');

    op1Input.setValue(0);
    keyboardButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op1).toBe(5);
  });

  // eslint-disable-next-line no-undef
  it('Delete button', () => {
    const wrapper = mount(Calc);
    const op1Input = wrapper.find('input[name=op1]');
    const keyboardButton = wrapper.find('button[id="delete"]');

    op1Input.setValue(5);
    keyboardButton.trigger('click');

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op1).toBe(0);
  });
});
