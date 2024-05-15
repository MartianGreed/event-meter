import { describe, it, expect, beforeEach, jest } from 'bun:test';
import { cleanup, render } from '@testing-library/react'
import { PersKmField } from './pers-km-field';

beforeEach(() => {
  cleanup();
});

describe('PersKmField', () => {

  it('should render with label', () => {
    const registerFn = jest.fn((n) => ({ name: n }));
    const { getByLabelText } = render(<PersKmField label="Car" name="car" register={registerFn} />);
    const numberLabel = getByLabelText('Number of people');
    const kmLabel = getByLabelText('Km sum');


    expect(numberLabel).not.toBe(null);
    expect(kmLabel).not.toBe(null);
    expect(registerFn).toBeCalledWith('carNumber')
    expect(registerFn).toBeCalledWith('carKm')
  });
});
