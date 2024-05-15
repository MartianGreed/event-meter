import { describe, it, beforeEach, jest, expect } from 'bun:test';
import { cleanup, render, } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Travel } from './travel';

beforeEach(() => {
  cleanup();
});

function setup(jsx: React.JSX.Element) {
  return { user: userEvent.setup(), ...render(jsx) }
}

describe('Travel', () => {

  it('has all the fields', async () => {
    const onSubmitFn = jest.fn();
    const { user, getAllByLabelText, getByText } = setup(<Travel submitCb={onSubmitFn} />);

    const nrInputs = getAllByLabelText('Number of people');
    const kmInputs = getAllByLabelText('Km sum');

    expect(nrInputs.length).toBe(kmInputs.length);

    for (let i = 0; i < nrInputs.length; i++) {
      await user.type(nrInputs[i], '100');
      await user.type(kmInputs[i], '100');
    }

    await user.click(getByText('Submit'));

    expect(onSubmitFn).toBeCalledWith({
      carNumber: '100',
      carKm: '100',
      electricCarNumber: '100',
      electricCarKm: '100',
      hybridCarNumber: '100',
      hybridCarKm: '100',
      twoWheelersNumber: '100',
      twoWheelersKm: '100',
      shortAirTravelNumber: '100',
      shortAirTravelKm: '100',
      mediumAirTravelNumber: '100',
      mediumAirTravelKm: '100',
      longAirTravelNumber: '100',
      longAirTravelKm: '100',
      metroNumber: '100',
      metroKm: '100',
      busNumber: '100',
      busKm: '100',
      trainEuropeNumber: '100',
      trainEuropeKm: '100',
      trainFranceNumber: '100',
      trainFranceKm: '100',
    });
  });
});
