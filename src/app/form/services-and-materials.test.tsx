import { describe, it, expect, jest, beforeEach } from 'bun:test';
import { cleanup, render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { ServicesAndMaterials } from './services-and-materials';

function setup(jsx: React.JSX.Element) {
  return { user: userEvent.setup(), ...render(jsx) }
}

beforeEach(() => {
  cleanup();
});

describe('ServicesAndMaterials', () => {
  it('should render with label', async () => {
    const submitCb = jest.fn((n) => ({ name: n }));
    const { user, getByText, getByLabelText } = setup(<ServicesAndMaterials submitCb={submitCb} />);
    const cardboard = getByLabelText('Cardboard');
    const iron = getByLabelText('Iron');
    const steel = getByLabelText('Steel');
    const glass = getByLabelText('Glass');
    const plastic = getByLabelText('Plastic');
    const paper = getByLabelText('Paper');

    await user.type(cardboard, '100');
    await user.type(iron, '100');
    await user.type(steel, '100');
    await user.type(glass, '100');
    await user.type(plastic, '100');
    await user.type(paper, '100');

    await user.click(getByText('Submit'));

    expect(cardboard).not.toBe(null);
    expect(iron).not.toBe(null);
    expect(steel).not.toBe(null);
    expect(glass).not.toBe(null);
    expect(plastic).not.toBe(null);
    expect(paper).not.toBe(null);
    expect(submitCb).toBeCalledWith({ cardboard: '100', iron: '100', steel: '100', glass: '100', plastic: '100', paper: '100' })
  });
});
