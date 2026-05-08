'use client';

import { useAuthModal } from "@/app/context/AuthModalContext";

export default function TradingCTAButton({buttonText = "Start Trading Now"}: {buttonText?: string}) {
    const { toggle: authToggle } = useAuthModal();
    
      const handlClick = () => {
        authToggle();
      }
    return (
        <button onClick={handlClick} className="btn-primary mt-8 no-underline inline-flex">
            {buttonText}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
    );
}