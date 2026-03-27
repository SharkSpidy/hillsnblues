type ViewSwitcherProps = {
  onSwitchView: (view: 'landing' | 'admin-login' | 'admin-dashboard') => void;
};

function ViewSwitcher({ onSwitchView }: ViewSwitcherProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      {/* <button
        onClick={() => onSwitchView('landing')}
        className="bg-primary-700 text-white px-4 py-2 rounded-small shadow-custom hover:bg-primary-800 text-sm font-medium transition-colors"
      >
        Website View
      </button>
      <button
        onClick={() => onSwitchView('admin-login')}
        className="bg-neutral-800 text-white px-4 py-2 rounded-small shadow-custom hover:bg-neutral-900 text-sm font-medium transition-colors"
      >
        Admin View
      </button> */}
    </div>
  );
}

export default ViewSwitcher;
