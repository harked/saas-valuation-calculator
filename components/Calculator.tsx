
import React, { useState, useMemo } from 'react';
import Slider from './Slider';

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const Calculator: React.FC = () => {
  const [arr, setArr] = useState<number>(1000000);
  const [growthRate, setGrowthRate] = useState<number>(50);

  const valuation = useMemo(() => {
    return 2 * arr + arr * (1 + 2.5 * (growthRate / 100));
  }, [arr, growthRate]);

  return (
    <div className="flex flex-col h-full bg-slate-900/50 p-8 rounded-xl ring-1 ring-white/10">
      <div className="flex-grow flex flex-col items-center justify-center text-center mb-8">
        <p className="text-slate-400 text-lg mb-2">Estimated Valuation</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          {formatCurrency(valuation)}
        </h2>
      </div>
      <div className="space-y-8">
        <Slider
          label="Annual Recurring Revenue (ARR)"
          min={0}
          max={10000000}
          step={100000}
          value={arr}
          onChange={(e) => setArr(Number(e.target.value))}
          formatValue={formatCurrency}
        />
        <Slider
          label="Annual Growth Rate"
          min={0}
          max={200}
          step={1}
          value={growthRate}
          onChange={(e) => setGrowthRate(Number(e.target.value))}
          formatValue={(value) => `${value}%`}
        />
      </div>
    </div>
  );
};

export default Calculator;
