import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-slate-950 text-red-400 font-mono min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full bg-slate-900 border border-red-900/50 rounded-lg p-6 shadow-2xl">
            <h1 className="text-xl font-bold mb-4 text-red-500">Application Error</h1>
            <pre className="whitespace-pre-wrap text-sm bg-black/30 p-4 rounded overflow-auto max-h-96">
              {this.state.error?.toString()}
            </pre>
            <p className="mt-4 text-slate-500 text-sm">Please check the console for more details.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);