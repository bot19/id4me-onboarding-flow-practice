import { OnboardForm } from './components/onboardForm';
import { Logo } from './ui';

// TODO: fix app height re responsive
function App() {
  return (
    <div className="flex min-h-full flex-col justify-center pt-12">
      <Logo />
      <OnboardForm />
    </div>
  );
}

export default App;
