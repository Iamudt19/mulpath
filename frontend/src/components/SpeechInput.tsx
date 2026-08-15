import React, { useState, useEffect } from 'react';
import { Input } from './Input';

interface SpeechInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onValueChange: (val: string) => void;
}

export const SpeechInput: React.FC<SpeechInputProps> = ({ label, onValueChange, value, ...props }) => {
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState('en-US'); // hi-IN, mr-IN
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      setRecognition(rec);
    }
  }, []);

  const toggleListen = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.lang = language;
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onValueChange(value ? `${value} ${transcript}` : transcript);
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }
  };

  return (
    <div className="flex flex-col space-y-2 w-full">
      <div className="flex justify-between items-end">
        {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="text-xs bg-slate-100 border rounded px-1 py-0.5 outline-none"
        >
          <option value="en-US">English</option>
          <option value="hi-IN">हिन्दी (Hindi)</option>
          <option value="mr-IN">मराठी (Marathi)</option>
        </select>
      </div>
      <div className="flex space-x-2 items-center">
        <Input 
          className="flex-1"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          {...props} 
        />
        <button
          type="button"
          onClick={toggleListen}
          className={`p-2 rounded-full transition-colors ${
            isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
          title="Voice input"
        >
          {isListening ? '⏹️' : '🎤'}
        </button>
      </div>
    </div>
  );
};
