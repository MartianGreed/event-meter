import React, { useState, useEffect, useContext } from "react";

type IMultiStepContext = {
  previous: () => void;
  next: () => void;
  activeStep: number;
};
const MultiStepContext = React.createContext<IMultiStepContext>({
  previous: () => { },
  next: () => { },
  activeStep: 0,
});

export function useMultistep() {
  return useContext(MultiStepContext);
}

type MultiStepProps = {
  defaultStep?: number;
};

export function MultiStep({ children, defaultStep = 1 }: React.PropsWithChildren<MultiStepProps>) {
  const [activeStep, setActiveStep] = useState<number>(0);
  useEffect(() => {
    if (activeStep === 0) {
      setActiveStep(defaultStep > React.Children.count(children) ? React.Children.count(children) : defaultStep);
    }
  }, [activeStep, defaultStep, children]);

  const steps = React.Children.map(children, (_, idx) => {
    return (
      <li className={idx + 1 === activeStep ? "active" : ""}>{idx + 1}</li>
    )
  });

  const content = React.Children.map(children, (child, idx) => {
    // @ts-ignore
    if (typeof child?.type === 'function') {
      // @ts-ignore
      return <div className={idx + 1 === activeStep ? "active" : ""}>{React.cloneElement(child)}</div>
    }
    // @ts-ignore
    return React.cloneElement(child, {
      // @ts-ignore
      className: `${idx + 1 === activeStep ? "active" : ""}${undefined !== child.props.className ? ' ' + child.props.className : ''}`,
    })
  });

  return (
    <MultiStepContext.Provider value={{
      previous: () => setActiveStep(activeStep - 1),
      next: () => setActiveStep(activeStep + 1),
      activeStep,
    }}>
      <div>
        <div className="step">{steps}</div>
        <div className="content-wrapper ">
          {content}
        </div>
      </div>
    </MultiStepContext.Provider>
  );
}
