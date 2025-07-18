import { HangingPhoto } from "./HangingPhoto";

export const LeftPanel = () => {
  return (
    <div className="h-screen w-3/5 bg-transparent flex-col items-center justify-center p-8 hidden lg:flex  z-[1]">
        <div className="flex flex-col items-center space-y-8">
          {/* Hanging String */}
          <div className="w-0.5 h-16 bg-muted-foreground shadow-string"></div>

          {/* Photo Frame */}
          <HangingPhoto />

          {/* Name and Title */}
          <div className="text-center space-y-2 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-left-panel-foreground">
              Alok Ranjan Joshi
            </h1>
            <p className="text-lg text-muted-foreground">
              Full Stack Developer | Devops
            </p>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Available for hire 😀
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};
