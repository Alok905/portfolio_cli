import { Minimize2, Maximize2, X, Terminal as TerminalIcon } from 'lucide-react';
import { Navigation } from '../Navigation';

export const TerminalHeader = ({ handleNavCommand }) => {

  return (
    <div className="flex items-center justify-between bg-muted/20 border-b border-primary/30 px-4 py-2">
      <div className="flex items-center justify-between space-x-1 w-full">
        <Navigation onCommandClick={handleNavCommand} />
        <div className='items-center space-x-2 hidden lg:flex'>
          <button className="ms-auto w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"></button>
          <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"></button>
        </div>
      </div>
    </div>
  );
};