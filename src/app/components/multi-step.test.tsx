import { describe, it, expect, beforeEach } from 'bun:test';
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MultiStep, useMultistep } from './multi-step';
import styles from './multi-step.module.css';

function Step({ title }: { title: string }) {
  const { previous, next } = useMultistep();
  return <div>
    {title}
    <button onClick={() => previous()}>previous</button>
    <button onClick={() => next()}>next</button>
  </div>
}

beforeEach(() => {
  cleanup();
});

describe('MultiStep', () => {
  it('generate steps based off children', () => {
    const { container } = render(
      <MultiStep>
        <div>Step 1</div>
        <div>Step 2</div>
      </MultiStep>
    );
    const bar = container.querySelector(styles.step)
    const active = container.querySelector(styles.active)

    expect(bar).not.toBe(null)
    expect(bar?.children.length).toBe(2)
    expect(active).not.toBe(null)
    expect(active?.textContent).toBe('1')
  });

  it('can set default step', () => {
    const { container } = render(
      <MultiStep defaultStep={2}>
        <div>Step 1</div>
        <div>Step 2</div>
      </MultiStep>
    );
    const active = container.querySelector(styles.active)
    expect(active).not.toBe(null)
    expect(active?.textContent).toBe('2')
  });

  it('get default to the last step if default is bigger than the number of steps', () => {
    const { container } = render(
      <MultiStep defaultStep={3}>
        <div>Step 1</div>
        <div>Step 2</div>
      </MultiStep>
    );
    const active = container.querySelector(styles.active)
    expect(active).not.toBe(null)
    expect(active?.textContent).toBe('2')
  });

  it('should add an active class on children elements', () => {
    const { container } = render(
      <MultiStep defaultStep={3}>
        <div>Step 1</div>
        <div>Step 2</div>
      </MultiStep>
    );
    const active = container.querySelector(styles.contentItemActive)
    expect(active).not.toBe(null)
    expect(active?.textContent).toBe('Step 2')
  });

  it('can change active step', () => {
    const { getAllByText, container } = render(
      <MultiStep>
        <Step title="Step 1" />
        <Step title="Step 2" />
      </MultiStep>
    );

    let active = container.querySelector(styles.contentItemActive)

    expect(active).not.toBe(null)
    expect(active?.textContent).toBe('Step 1previousnext')

    const next = getAllByText('next')
    fireEvent.click(next[0])

    active = container.querySelector(styles.contentItemActive)

    expect(active).not.toBe(null)
    expect(active?.textContent).toBe('Step 2previousnext')
  });
});
