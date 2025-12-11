import { useEffect, useState } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let timer;
    
    // Only start typing if the displayed text is shorter than the target text
    if (displayedText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
    }
    
    // Cleanup function
    return () => clearTimeout(timer);
  }, [displayedText, text, speed]);

  return (
    <div className="flex justify-center md:justify-start items-center h-8">
      <span className="text-xl md:text-3xl font-semibold text-blue-400">
        {displayedText}
      </span>
      {/* Simple animated cursor using Tailwind's animate-pulse */}
      <span 
        className={`inline-block h-6 md:h-8 w-0.5 ml-1 bg-blue-400 ${
          displayedText.length === text.length ? 'animate-pulse' : 'opacity-100'
        }`} 
      />
    </div>
  );
};

export default TypingEffect;