import { describe, it, expect, jest, beforeEach } from 'bun:test';
import { cleanup, render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Logistics } from './logistics';

function setup(jsx: React.JSX.Element) {
  return { user: userEvent.setup(), ...render(jsx) }
}

beforeEach(() => {
  cleanup();
});

describe('Logistics', () => {
  it('should render with label', async () => {
    const submitCb = jest.fn((n) => ({ name: n }));
    const { user, getByText, getByLabelText } = setup(<Logistics submitCb={submitCb} />);
    const vehicule = getByLabelText('Vehicule');
    const decoration = getByLabelText('Transport of fittings and decoration');
    const cattering = getByLabelText('Transport of cattering products');
    const communication = getByLabelText('Transport of communication media');
    const other = getByLabelText('Transport of other goods');


    await user.click(getByText('Submit'));

    expect(vehicule).not.toBe(null);
    expect(decoration).not.toBe(null);
    expect(cattering).not.toBe(null);
    expect(communication).not.toBe(null);
    expect(other).not.toBe(null);
  });
});
