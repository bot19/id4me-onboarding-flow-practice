export const ProgressBar = () => {
  return (
    <div>
      <h4 className="sr-only">Password strength</h4>
      <div aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: '25%' }}
            className="h-2 rounded-full bg-primary"
          />
        </div>
        <div className="mt-2 grid-cols-4 text-sm font-medium text-gray-600 grid">
          <div className="text-primary">Very weak</div>
          <div className="text-center">Weak</div>
          <div className="text-center">Average</div>
          <div className="text-right">strong</div>
        </div>
      </div>
    </div>
  );
};
