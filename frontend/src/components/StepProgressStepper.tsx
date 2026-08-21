import React from 'react';

type HarvestStep = 'F5_GPS' | 'F6_CAMERA' | 'F7_NFC' | 'F8_REVIEW';

interface StepConfig {
  id: HarvestStep;
  number: number;
  label: string;
  subtitle: string;
  icon: string;
}

const STEPS: StepConfig[] = [
  { id: 'F5_GPS',    number: 1, label: 'GPS Location',    subtitle: 'Verify harvest zone',    icon: '📍' },
  { id: 'F6_CAMERA', number: 2, label: 'Photo Capture',   subtitle: 'AI species detection',   icon: '📸' },
  { id: 'F7_NFC',    number: 3, label: 'NFC Seal & Qty',  subtitle: 'Tamper-proof tagging',   icon: '🔖' },
  { id: 'F8_REVIEW', number: 4, label: 'Review & Submit', subtitle: 'Blockchain recording',   icon: '⛓️' },
];

interface StepProgressStepperProps {
  currentStep: HarvestStep | string;
  /** called when user clicks a completed step to go back */
  onNavigate?: (step: HarvestStep) => void;
}

export const StepProgressStepper: React.FC<StepProgressStepperProps> = ({ currentStep, onNavigate }) => {
  const currentIdx = STEPS.findIndex(s => s.id === currentStep);

  return (
    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-0">
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 font-sans">
        Progress
      </p>

      {STEPS.map((step, idx) => {
        const isDone    = idx < currentIdx;
        const isActive  = idx === currentIdx;
        const isPending = idx > currentIdx;

        return (
          <div key={step.id} className="flex gap-3">
            {/* Left: indicator + connector */}
            <div className="flex flex-col items-center flex-shrink-0">
              {/* Circle */}
              <button
                onClick={() => isDone && onNavigate?.(step.id)}
                disabled={!isDone}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  flex-shrink-0 transition-all duration-300 font-sans
                  ${isDone    ? 'bg-emerald-500 text-white cursor-pointer hover:bg-emerald-400 shadow-md shadow-emerald-900/40' : ''}
                  ${isActive  ? 'bg-slate-900 border-2 border-emerald-400 text-emerald-400' : ''}
                  ${isPending ? 'bg-slate-800 border border-slate-700 text-slate-600 cursor-default' : ''}
                `}
                style={isActive ? { boxShadow: '0 0 0 4px rgba(52,211,153,0.15), 0 0 12px rgba(52,211,153,0.2)' } : {}}
              >
                {isDone ? (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                ) : isActive ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                ) : (
                  <span className="text-xs font-mono">{step.number}</span>
                )}
              </button>

              {/* Connector (except last) */}
              {idx < STEPS.length - 1 && (
                <div className={`w-0.5 my-1 flex-shrink-0 transition-all duration-500 ${
                  isDone ? 'h-8 bg-emerald-600' : 'h-8 bg-slate-800'
                }`} />
              )}
            </div>

            {/* Right: labels */}
            <div className={`pb-${idx < STEPS.length - 1 ? '2' : '0'} pt-1 min-w-0`}>
              <div className="flex items-center gap-1.5">
                <span className={`text-sm font-bold font-sans leading-tight ${
                  isActive ? 'text-white' : isDone ? 'text-emerald-300' : 'text-slate-600'
                }`}>
                  {step.label}
                </span>
                {isActive && (
                  <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full uppercase tracking-wide font-sans">
                    Active
                  </span>
                )}
              </div>
              <p className={`text-[11px] font-sans leading-tight ${
                isActive ? 'text-slate-400' : isDone ? 'text-slate-500' : 'text-slate-700'
              }`}>
                {step.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
