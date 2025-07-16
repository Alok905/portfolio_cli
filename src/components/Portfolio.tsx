import { useState } from 'react';
import { LeftPanel } from './LeftPanel';
import { Terminal } from './CLI/Terminal';
import { Navigation } from './Navigation';

export const Portfolio = () => {
  const [commandToExecute, setCommandToExecute] = useState<string | null>(null);

  const handleNavCommand = (command: string) => {
    setCommandToExecute(command);
  };

  const handleCommandExecuted = () => {
    setCommandToExecute(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex flex-col min-h-screen">
          <Navigation onCommandClick={handleNavCommand} />
          <div className="flex-1 pt-16">
            <Terminal 
              externalCommand={commandToExecute}
              onCommandExecuted={handleCommandExecuted}
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Left Panel - Fixed */}
        <LeftPanel />
        
        {/* Right Panel - Terminal */}
        <div className="flex-1 ml-[33.333333%]">
          {/* <Navigation onCommandClick={handleNavCommand} /> */}
          <div className="">
            <Terminal 
              externalCommand={commandToExecute}
              onCommandExecuted={handleCommandExecuted}
              handleNavCommand={handleNavCommand}
            />
          </div>
        </div>
      </div>
    </div>
  );
};