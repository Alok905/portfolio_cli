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
    <div className="min-h-screen min-w-full bg-background">
      {/* Mobile Layout */}
      {/* <div className="lg:hidden">
        <div className="flex flex-col min-h-screen">
          <Navigation onCommandClick={handleNavCommand} />
          <div className="flex-1 pt-16">
            <Terminal 
              externalCommand={commandToExecute}
              onCommandExecuted={handleCommandExecuted}
            />
          </div>
        </div>
      </div> */}

      {/* Desktop Layout */}
      <div className="flex">
        {/* Left Panel - Fixed */}
        <LeftPanel />
        
        {/* Right Panel - Terminal */}
        <div className="flex-1">
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