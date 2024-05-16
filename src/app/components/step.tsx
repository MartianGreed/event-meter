import { useMultistep } from "./multi-step";

type StepProps = {
  title: string;
  previousLabel?: string;
  nextLabel?: string;
}

export function Step({ children, title, previousLabel = 'Previous', nextLabel = 'Next' }: React.PropsWithChildren<StepProps>) {
  return (
    <div>
      <header>{title}</header>
      <div>
        {children}
      </div>
    </div>
  );
}

