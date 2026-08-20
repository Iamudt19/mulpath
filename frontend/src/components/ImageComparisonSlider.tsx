import React, { useState, useRef, useCallback } from 'react';

interface ImageComparisonSliderProps {
  originalImage: string;
  heatmapImage: string;
  className?: string;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
  originalImage,
  heatmapImage,
  className = ''
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-xs px-1">
        <span className="font-bold text-slate-200 flex items-center gap-1.5">
          <span className="text-emerald-400">🎛️</span>
          <span>Side-by-Side Visual AI Inspection</span>
        </span>
        <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
          Drag handle to inspect • {Math.round(sliderPos)}% Heatmap
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-video rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-700/80 bg-slate-950 shadow-2xl"
      >
        {/* Layer 1: Original Image */}
        <img
          src={originalImage}
          alt="Original photo"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-slate-200 px-3 py-1 rounded-xl text-[11px] font-bold border border-slate-700/80 shadow pointer-events-none flex items-center gap-1.5">
          <span>📷</span>
          <span>Original Capture</span>
        </div>

        {/* Layer 2: AI Focus Heatmap (Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img
            src={heatmapImage}
            alt="AI Heatmap"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-emerald-950/90 backdrop-blur-md text-emerald-300 px-3 py-1 rounded-xl text-[11px] font-bold border border-emerald-500/60 shadow pointer-events-none flex items-center gap-1.5">
            <span className="text-amber-400">🔥</span>
            <span>AI Focus Heatmap</span>
          </div>
        </div>

        {/* Vertical Divider Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle Knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center text-sm shadow-2xl backdrop-blur-md font-bold">
            <span>↔</span>
          </div>
        </div>
      </div>
    </div>
  );
};
