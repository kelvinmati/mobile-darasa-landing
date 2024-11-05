import { useState, useEffect } from "react";

const TypingAnimation = (word) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const pauseDuration = 1000;

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (displayText.length < word.length) {
        timer = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length - 1));
        }, erasingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsTyping(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping]);

  return (
    <div className="font-mono text-2xl p-4">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingAnimation;
