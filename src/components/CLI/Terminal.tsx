import { useState, useRef, useEffect } from "react";
import { CommandHandler } from "./CommandHandler";
import { TerminalPrompt } from "./TerminalPrompt";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalHeader } from "./TerminalHeader";
import { TerminalIcon } from "lucide-react";

interface CommandHistory {
  command: string;
  output: string;
  timestamp: Date;
}

interface TerminalProps {
  externalCommand?: string | null;
  onCommandExecuted?: () => void;
  handleNavCommand?: (command: string) => void;
}

export const Terminal = ({
  externalCommand,
  onCommandExecuted,
  handleNavCommand,
}: TerminalProps) => {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus input when component mounts
    inputRef.current?.focus();

    // Add welcome message
    const welcomeOutput = `
╭─────────────────────────────────────────────╮
│     Welcome to Alok's Portfolio Terminal    │
│                  v1.0.0                     │
╰─────────────────────────────────────────────╯

🚀 Interactive CLI Portfolio System
📂 Type 'help' to explore available commands
💡 Click the navigation icons above to execute commands
🎯 Pro tip: Try 'ls', 'pwd', or 'whoami'

Last login: ${new Date().toLocaleDateString()} on terminal
`;
    setHistory([
      {
        command: "",
        output: welcomeOutput,
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    // Scroll to bottom when new content is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    handleTerminalClick();
  }, [history]);

  // Handle external commands from navigation
  useEffect(() => {
    if (externalCommand) {
      handleCommand(externalCommand);
      onCommandExecuted?.();
    }
  }, [externalCommand, onCommandExecuted]);

  const handleCommand = async (command: string) => {
    if (!command.trim()) return;

    setIsProcessing(true);
    const output = CommandHandler.processCommand(command.trim());

    // Simulate processing delay for realism
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (output === "CLEAR_HISTORY") {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: command.trim(),
          output,
          timestamp: new Date(),
        },
      ]);
    }

    setCurrentCommand("");
    setIsProcessing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentCommand);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-screen bg-terminal-bg border-l-2 border-primary/30 shadow-terminal-glow animate-glow-pulse">
      <TerminalHeader handleNavCommand={handleNavCommand} />

      <div
        ref={terminalRef}
        className="flex-1 p-2 lg:p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent font-mono"
        onClick={handleTerminalClick}
      >
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            {entry.command && (
              <div className="flex items-center text-terminal-text  gap-[.5rem]">
                {/* <span className="text-terminal-prompt mr-2">$</span> */}
                <div className="flex items-center space-x-2">
                  <TerminalIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-terminal-text text-[#98c379]">
                    alok@portfolio😊$
                  </span>
                </div>
                <span className="text-[#ffd700]">{entry.command}</span>
              </div>
            )}
            <TerminalOutput content={entry.output} />
            <br /><br />
          </div>
        ))}

        {/* Current Prompt */}
        <TerminalPrompt
          value={currentCommand}
          onChange={setCurrentCommand}
          onKeyPress={handleKeyPress}
          isProcessing={isProcessing}
          ref={inputRef}
        />
      </div>
    </div>
  );
};
