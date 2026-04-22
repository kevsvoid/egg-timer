import { useState, useEffect, useRef } from 'react';
import { PixelEgg } from './components/PixelEgg';
import { playSoundEffect } from './utils/sounds';

type EggType = 'soft' | 'medium' | 'hard';

const EGG_TIMES = {
  soft: 360,
  medium: 480,
  hard: 720,
};

const EGG_LABELS = {
  soft: 'SOFT',
  medium: 'MEDIUM',
  hard: 'HARD',
};

export default function App() {
  const [selectedEgg, setSelectedEgg] = useState<EggType>('medium');
  const [timeLeft, setTimeLeft] = useState(EGG_TIMES.medium);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  // Play alarm when timer is complete
  useEffect(() => {
    if (isComplete) {
      playSoundEffect.alarm();
    }
  }, [isComplete]);

  const handleEggChange = (type: EggType) => {
    playSoundEffect.click();
    setSelectedEgg(type);
    setTimeLeft(EGG_TIMES[type]);
    setIsRunning(false);
    setIsComplete(false);
  };

  const handleStartStop = () => {
    playSoundEffect.click();
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    playSoundEffect.click();
    setIsRunning(false);
    setTimeLeft(EGG_TIMES[selectedEgg]);
    setIsComplete(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((EGG_TIMES[selectedEgg] - timeLeft) / EGG_TIMES[selectedEgg]) * 100;

  return (
    <div
      className="size-full min-h-screen flex items-center justify-center bg-[#ffd4e5] relative overflow-hidden"
      style={{
        fontFamily: "'Press Start 2P', cursive",
        imageRendering: 'pixelated'
      }}
    >
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 4px),
                          repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 4px)`,
        backgroundSize: '4px 4px'
      }} />

      <div className="w-full max-w-lg px-6 py-8 relative z-10">
        <div className="bg-[#fff0f5] border-4 border-[#c49bd1] shadow-[8px_8px_0px_0px_rgba(196,155,209,0.5)] p-8 space-y-6">
          <h1 className="text-center text-xl text-[#9b59b6] mb-8 tracking-wider">EGG TIMER</h1>

          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 bg-[#ffd4e5] border-4 border-[#d4a5d4] flex items-center justify-center">
              {isComplete ? (
                <div className="text-center">
                  <PixelEgg state="complete" size={160} />
                  <div className="text-[8px] text-[#4caf50] animate-pulse mt-2">READY!</div>
                </div>
              ) : (
                <PixelEgg state={isRunning ? selectedEgg : 'raw'} size={160} />
              )}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-center text-[8px] text-[#666] mb-3 tracking-wide">SELECT EGG TYPE</p>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(EGG_TIMES) as EggType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => handleEggChange(type)}
                  disabled={isRunning}
                  className={`py-3 px-2 border-4 transition-all ${
                    selectedEgg === type
                      ? 'bg-[#d4a5d4] border-[#9b59b6] text-white translate-y-0'
                      : 'bg-[#fff0f5] border-[#d4a5d4] text-[#666] translate-y-0 hover:translate-y-[-2px]'
                  } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:translate-y-[2px]'}`}
                  style={{ boxShadow: selectedEgg === type ? '4px 4px 0px 0px rgba(155,89,182,0.5)' : '4px 4px 0px 0px rgba(212,165,212,0.5)' }}
                >
                  <div className="flex justify-center mb-1">
                    <PixelEgg state={type} size={48} />
                  </div>
                  <div className="text-[6px] leading-tight">{EGG_LABELS[type]}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <div className="text-center">
              <div className="text-4xl tracking-wider text-[#9b59b6] mb-4">{formatTime(timeLeft)}</div>
            </div>

            <div className="w-full bg-[#d4a5d4] border-4 border-[#9b59b6] h-8 p-1">
              <div
                className="h-full bg-[#ffd4e5] transition-all duration-300 ease-linear border-2 border-[#ffb3d9]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex gap-3 justify-center pt-6">
              <button
                onClick={handleStartStop}
                disabled={isComplete}
                className={`px-6 py-4 border-4 text-[10px] ${
                  isComplete
                    ? 'bg-[#ccc] border-[#999] text-[#666] cursor-not-allowed'
                    : 'bg-[#9b59b6] border-[#6a3d7a] text-white cursor-pointer active:translate-y-[2px] hover:translate-y-[-2px]'
                }`}
                style={{ boxShadow: isComplete ? 'none' : '4px 4px 0px 0px rgba(106,61,122,0.8)' }}
              >
                {isRunning ? '⏸ PAUSE' : '▶ START'}
              </button>

              <button
                onClick={handleReset}
                className="px-6 py-4 bg-[#fff0f5] text-[#9b59b6] border-4 border-[#d4a5d4] text-[10px] cursor-pointer active:translate-y-[2px] hover:translate-y-[-2px]"
                style={{ boxShadow: '4px 4px 0px 0px rgba(212,165,212,0.8)' }}
              >
                ↻ RESET
              </button>
            </div>

            {isComplete && (
              <div className="text-center mt-4">
                <p className="text-[8px] text-[#4caf50] animate-pulse tracking-wide">★ EGG COMPLETE! ★</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}