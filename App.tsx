
import React from 'react';
import Calculator from './components/Calculator';
import InfoPanel from './components/InfoPanel';
import { ChartBarIcon, ScaleIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <main className="w-full max-w-7xl mx-auto bg-slate-800/50 rounded-2xl shadow-2xl shadow-indigo-900/20 ring-1 ring-white/10 backdrop-blur-sm">
        <div className="p-8 lg:p-12">
          <header className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2">
              SaaS Valuation Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Estimate your company's potential valuation based on key SaaS metrics.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <Calculator />
            </div>
            <div className="lg:col-span-2">
              <InfoPanel />
            </div>
          </div>

        </div>
         <footer className="text-center text-sm text-slate-500 py-6 border-t border-white/10">
            Valuation Formula: 2x ARR + ARR x (1 + 2.5x Growth Rate)
          </footer>
      </main>
    </div>
  );
};

export default App;
