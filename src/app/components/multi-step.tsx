import React, { useState, useEffect, useContext } from "react";
import styles from './multi-step.module.css';

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

  const handleListClick = (step: number) => {
    setActiveStep(step);
  }
  const steps = React.Children.map(children, (_, idx) => {
    return (
      <li className={idx + 1 === activeStep ? styles.active : ""} onClick={() => handleListClick(idx + 1)}>{idx + 1}</li>
    )
  });

  const content = React.Children.map(children, (child, idx) => {
    // @ts-ignore
    if (typeof child?.type === 'function') {
      // @ts-ignore
      return <div className={idx + 1 === activeStep ? styles.contentItemActive : ""}>{React.cloneElement(child)}</div>
    }
    // @ts-ignore
    return React.cloneElement(child, {
      // @ts-ignore
      className: `${idx + 1 === activeStep ? styles.contentItemActive : ""}${undefined !== child.props.className ? ' ' + child.props.className : ''}`,
    })
  });

  return (
    <MultiStepContext.Provider value={{
      previous: () => activeStep - 1 > 0 ? setActiveStep(activeStep - 1) : setActiveStep(1),
      next: () => activeStep + 1 <= steps?.length ? setActiveStep(activeStep + 1) : setActiveStep(steps?.length),
      activeStep,
    }}>
      <div className={styles.multistepContainer}>
        <div className={styles.step}>{steps}</div>
        <div className={styles.contentWrapper}>
          {content}
        </div>
      </div>
    </MultiStepContext.Provider>
  );
}
