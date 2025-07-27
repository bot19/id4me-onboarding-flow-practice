import { OnboardForm } from './components/onboardForm';
import { Logo } from './ui';

function App() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 xs:px-6 lg:px-8">
      <Logo />
      <OnboardForm />
    </div>
  );
}

export default App;
