import { describe, it, beforeEach, jest, expect } from 'bun:test';
import { cleanup, render, } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Energy } from './energy';

beforeEach(() => {
  cleanup();
});

function setup(jsx: React.JSX.Element) {
  return { user: userEvent.setup(), ...render(jsx) }
}

describe('Energy', () => {

  it('has all the fields', async () => {
    const onSubmitFn = jest.fn();
    const { user, getByLabelText, getByText } = setup(<Energy submitCb={onSubmitFn} />);

    await user.type(getByLabelText('Electricity'), '100');
    await user.type(getByLabelText('Natural Gas'), '100');
    await user.type(getByLabelText('Fuel Oil'), '100');
    await user.type(getByLabelText('Power'), '100');
    await user.type(getByLabelText('Duration of use'), '100');
    await user.click(getByText('Submit'));

    expect(onSubmitFn).toBeCalledWith({ electricity: '100', gas: '100', oil: '100', generatorPower: '100', generatorDuration: '100' });
  });
});
