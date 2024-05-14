import { useMultistep } from "./multi-step";

export function Step({ children, title, previousLabel = 'Previous', nextLabel = 'Next' }) {
  const { previous, next } = useMultistep();
  return (
    <div>
      <header>{title}</header>
      <div>
        {children}
      </div>
      <div>
        <button onClick={() => previous()}>{previousLabel}</button>
        <button onClick={() => next()}>{nextLabel}</button>
      </div>
    </div>
  );
}

