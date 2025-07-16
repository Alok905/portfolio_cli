import { HangingPhoto } from './HangingPhoto';

export const LeftPanel = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-1/3 bg-left-panel flex flex-col items-center justify-center p-8 hidden lg:flex">
      <div className="flex flex-col items-center space-y-8">
        {/* Hanging String */}
        <div className="w-0.5 h-16 bg-muted-foreground shadow-string"></div>
        
        {/* Photo Frame */}
        <HangingPhoto />
        
        {/* Name and Title */}
        <div className="text-center space-y-2 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-left-panel-foreground">
            Alok Kumar
          </h1>
          <p className="text-lg text-muted-foreground">
            Full Stack Developer
          </p>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for hire</span>
          </div>
        </div>
      </div>
    </div>
  );
};