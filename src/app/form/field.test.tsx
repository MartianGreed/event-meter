import { describe, it, expect, beforeEach, jest } from 'bun:test';
import { cleanup, render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import { Field } from './field';



beforeEach(() => {
  cleanup();
});

describe('Field', () => {

  it('should render with label', () => {
    const registerFn = jest.fn((n) => ({ name: n }));
    const { getByLabelText } = render(<Field label="Name" name="name" register={registerFn} />);
    const label = getByLabelText('Name');

    expect(label).not.toBe(null);
    expect(registerFn).toBeCalledWith('name')
  });

  it('should render with input', () => {
    const registerFn = jest.fn((n) => ({ name: n }));
    const { container } = render(<Field label="Email" name="email" register={registerFn} />);
    const input = container.querySelector('input');

    expect(input).not.toBe(null);
    expect(input?.id).toBe('email');
    expect(registerFn).toBeCalledWith('email')
  });

});
