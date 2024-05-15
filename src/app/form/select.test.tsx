import { describe, it, expect, jest, beforeEach } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Select } from './select';

function setup(jsx: React.JSX.Element) {
  return { user: userEvent.setup(), ...render(jsx) }
}

beforeEach(() => {
  cleanup();
});

describe('Select', () => {
  it('should render a select', async () => {
    const registerFn = jest.fn(() => { })
    const { user } = setup(<Select label="Vehicule" name="vehicule" register={registerFn}><option value="van">Van</option><option value="semi-trailer">Semi Trailer</option></Select>)
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByRole(
      'option', { name: /van/i }
    ));
  });

});
