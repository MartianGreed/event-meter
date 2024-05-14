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

export function MultiStep({ children, defaultStep = 1 }) {
  const [activeStep, setActiveStep] = useState<number>(0);
  useEffect(() => {
    if (activeStep === 0) {
      setActiveStep(defaultStep > React.Children.count(children) ? React.Children.count(children) : defaultStep);
    }
  }, [activeStep, defaultStep]);

  const steps = React.Children.map(children, (_, idx) => {
    return (
      <li className={idx + 1 === activeStep ? "active" : ""}>{idx + 1}</li>
    )
  });

  const content = React.Children.map(children, (child, idx) => {
    if (typeof child.type === 'function') {
      return <div className={idx + 1 === activeStep ? "active" : ""}>{React.cloneElement(child)}</div>
    }
    return React.cloneElement(child, {
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
