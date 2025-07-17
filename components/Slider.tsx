
import React from 'react';

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formatValue: (value: number) => string;
}

const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  step,
  value,
  onChange,
  formatValue,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-slate-300 font-medium">{label}</label>
        <span className="px-3 py-1 text-sm font-semibold text-indigo-300 bg-indigo-500/10 rounded-full">
          {formatValue(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default Slider;
