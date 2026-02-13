import { useState } from 'react';
import FloatingHeartsBackground from './FloatingHeartsBackground';
import ValentineLayout from './ValentineLayout';
import AttentionStep from './steps/AttentionStep';
import HelloStep from './steps/HelloStep';
import MemoriesStep from './steps/MemoriesStep';
import LetterStep from './steps/LetterStep';
import FinalQuestionStep from './steps/FinalQuestionStep';

export default function ValentineProposalFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  return (
    <div className="relative min-h-screen">
      <FloatingHeartsBackground />
      <ValentineLayout>
        {currentStep === 1 && <AttentionStep onNext={nextStep} />}
        {currentStep === 2 && <HelloStep onNext={nextStep} />}
        {currentStep === 3 && <MemoriesStep onNext={nextStep} />}
        {currentStep === 4 && <LetterStep onNext={nextStep} />}
        {currentStep === 5 && <FinalQuestionStep />}
      </ValentineLayout>
    </div>
  );
}
