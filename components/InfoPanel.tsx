
import React from 'react';
import { ChartBarIcon, ScaleIcon } from './Icons';

const InfoPanel: React.FC = () => {
  return (
    <div className="space-y-8 text-slate-300">
      <div>
        <div className="flex items-center mb-3">
          <div className="p-2 bg-green-500/10 rounded-lg mr-4">
              <ScaleIcon className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Annual Recurring Revenue (ARR)</h3>
        </div>
        <p className="text-slate-400 leading-relaxed">
            ARR is the value of the contracted recurring revenue components of your term subscriptions normalized to a one-year period. It's a key metric for SaaS businesses to measure growth.
        </p>
      </div>

      <div>
        <div className="flex items-center mb-3">
          <div className="p-2 bg-sky-500/10 rounded-lg mr-4">
             <ChartBarIcon className="w-6 h-6 text-sky-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Annual Growth Rate</h3>
        </div>
        <p className="text-slate-400 leading-relaxed mb-4">
          Your growth rate is the rate at which your company increases its ARR on an annual basis. For example, if your ARR was $100,000 last year and $150,000 this year, your growth rate is 50%.
        </p>
        <div className="p-4 bg-slate-900/70 rounded-lg text-sm">
          <p className="text-slate-400 mb-2">The formula is:</p>
          <code className="text-cyan-400 font-mono">
            (ARR[now] - ARR[-1]) / ARR[-1]
          </code>
           <div className="mt-3 text-xs text-slate-500">
            <p><span className="font-semibold">ARR[now]:</span> Current year's ARR</p>
            <p><span className="font-semibold">ARR[-1]:</span> Previous year's ARR</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
