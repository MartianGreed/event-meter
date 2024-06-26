import { describe, it, expect, beforeEach } from 'bun:test';
import { cleanup, render } from '@testing-library/react'
import { Step } from './step';

beforeEach(() => {
  cleanup();
});

describe('Step', () => {

  it('should render step with title', () => {
    const wrapper = render(<Step title="Step 1" />);
    const item = wrapper.getByText('Step 1');
    const next = wrapper.getByText('Next');
    const previous = wrapper.getByText('Previous');

    expect(item).not.toBe(null);
    expect(next).not.toBe(null);
    expect(previous).not.toBe(null);
  });

  it('can change labels', () => {
    const wrapper = render(<Step title="Step 1" previousLabel='ahah' nextLabel='hehe' />);
    const item = wrapper.getByText('Step 1');
    const next = wrapper.getByText('ahah');
    const previous = wrapper.getByText('hehe');

    expect(item).not.toBe(null);
    expect(next).not.toBe(null);
    expect(previous).not.toBe(null);
  });
});
