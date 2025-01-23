export function ScrollIndicator({ isScrolling }: { isScrolling: boolean }) {
  if (!isScrolling) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}