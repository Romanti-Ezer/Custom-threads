import { Outlet } from 'react-router-dom';
import useCheckout from '../hooks/useCheckout';
import { useEffect } from 'react';

import ActionButtons from '../components/Extra/ActionButtons';
import { StyledCheckout } from '../components/UI/Checkout.styled';
import { analytics } from '../features/analytics';

const Checkout = () => {
  const { onReturn, onProceed, layout, currentStepNum, currentStepText, areDetailsInvalid, isLastStep } =
    useCheckout();

  useEffect(() => {
    analytics.page({
      path: '/checkout/review',
      title: 'Checkout',
      url: 'http://localhost:3000'
    });
  }, []);

  return (
    <>
      <StyledCheckout flexSettings={layout} className={currentStepText}>
        <p className="step-indicator">
          <span className="step">{currentStepNum + 1}</span>
          <span className="step-description">{currentStepText}</span>
        </p>
        <Outlet />
        {!isLastStep && (
          <ActionButtons
            isCheckout
            onDisable={onReturn}
            onAction={onProceed}
            isDisabled={areDetailsInvalid}
          />
        )}
      </StyledCheckout>
    </>
  );
};

export default Checkout;
