import { describe, it, expect, beforeEach, jest } from 'bun:test';
import { cleanup, render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Catering } from './catering';


function setup(jsx: React.JSX.Element) {
  return { user: userEvent.setup(), ...render(jsx) }
}

beforeEach(() => {
  cleanup();
});

describe('Catering', () => {

  it('should render with label', async () => {
    const submitCb = jest.fn((n) => ({ name: n }));
    const { user, getByText, getByLabelText } = setup(<Catering submitCb={submitCb} />);
    const meals = getByLabelText('Meals');
    const drinks = getByLabelText('Drinks');

    await user.type(meals, '100');
    await user.type(drinks, '100');
    await user.click(getByText('Submit'));

    expect(meals).not.toBe(null);
    expect(drinks).not.toBe(null);
    expect(submitCb).toBeCalledWith({ meals: '100', drinks: '100' })
  });
});
