import { User, Briefcase, Code, Mail, HelpCircle, Home } from 'lucide-react';

interface NavigationProps {
  onCommandClick: (command: string) => void;
}

const navItems = [
  { icon: Home, command: 'help', label: 'Help' },
  { icon: User, command: 'about', label: 'About' },
  { icon: Code, command: 'projects', label: 'Projects' },
  { icon: Briefcase, command: 'experience', label: 'Experience' },
  { icon: HelpCircle, command: 'skills', label: 'Skills' },
  { icon: Mail, command: 'contact', label: 'Contact' }
];

export const Navigation = ({ onCommandClick }: NavigationProps) => {
  return (
    <nav className="bg-transparent px-6 py-1">
      <div className="flex items-center space-x-4">
        {navItems.map(({ icon: Icon, command, label }) => (
          <button
            key={command}
            onClick={() => onCommandClick(command)}
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-terminal-text hover:bg-primary/20 hover:text-primary transition-all duration-200 group"
            title={`Execute: ${command}`}
          >
            <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium hidden md:block">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};