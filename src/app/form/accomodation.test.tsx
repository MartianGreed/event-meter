import { describe, it, expect, beforeEach, jest } from 'bun:test';
import { cleanup, render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Accomodation } from './accomodation';


function setup(jsx: React.JSX.Element) {
  return { user: userEvent.setup(), ...render(jsx) }
}

beforeEach(() => {
  cleanup();
});

describe('Accomodation', () => {

  it('should render with label', async () => {
    const submitCb = jest.fn((n) => ({ name: n }));
    const { user, getByLabelText, getByText } = setup(<Accomodation submitCb={submitCb} />);
    const nights = getByLabelText('Total reservations');

    await user.type(nights, '100');
    await user.click(getByText('Submit'));

    expect(nights).not.toBe(null);
    // expect(drinks).not.toBe(null);
    expect(submitCb).toBeCalledWith({ totalReservations: '100' })
  });
});
