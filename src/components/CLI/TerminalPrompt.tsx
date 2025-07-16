import { TerminalIcon } from 'lucide-react';
import { forwardRef } from 'react';

interface TerminalPromptProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isProcessing: boolean;
}

export const TerminalPrompt = forwardRef<HTMLInputElement, TerminalPromptProps>(
  ({ value, onChange, onKeyPress, isProcessing }, ref) => {
    return (
      <div className="flex items-center text-terminal-text gap-[.5rem]">
       <div className="flex items-center space-x-2">
        <TerminalIcon className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-terminal-text text-[#98c379]">alok@portfolio😊$</span>
      </div>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          disabled={isProcessing}
          className="flex-1 bg-transparent outline-none text-terminal-text font-mono text-[#ffd700] caret-pink-500"
          placeholder={isProcessing ? "Processing..." : "Enter command..."}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    );
  }
);