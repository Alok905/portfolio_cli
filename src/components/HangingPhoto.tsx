import { useState } from 'react';
import profilePhoto from '../assets/profile-photo.png';

export const HangingPhoto = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Frame */}
      <div className="w-48 h-48 bg-muted border-4 border-muted-foreground rounded-lg shadow-lg animate-swing relative overflow-hidden">
        {/* Photo */}
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          {!imageLoaded && (
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto animate-pulse"></div>
              <p className="text-xs text-muted-foreground">Loading...</p>
            </div>
          )}
          <img 
            src={profilePhoto} 
            alt="Alok Kumar"
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Frame shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-foreground/5 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Hanging mechanism */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-muted-foreground rounded-full shadow-sm"></div>
      </div>
    </div>
  );
};