import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('App error:', error, info);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-slate-950">
          <div className="max-w-2xl bg-slate-900 border border-red-500/50 rounded-xl p-8 text-white">
            <h2 className="text-xl font-bold text-red-400 mb-4">Something went wrong</h2>
            <pre className="text-sm text-slate-300 overflow-auto max-h-60 p-4 bg-slate-950 rounded">
              {this.state.error.toString()}
            </pre>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="mt-6 px-4 py-2 bg-sky-500 rounded-lg font-medium hover:bg-sky-400"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
