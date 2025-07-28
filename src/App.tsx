import { useState } from 'react';
import { OnboardForm } from './components/onboardForm';
import { Logo } from './ui';
import { StepOneAuth } from './components/authenticate';

// TODO: fix app height re responsive
function App() {
  const [step] = useState(1);

  return (
    <main className="flex min-h-full flex-col justify-center pt-12">
      <Logo />
      {step === 1 && <StepOneAuth />}
      {step > 1 && <OnboardForm step={step} />}
    </main>
  );
}

export default App;
