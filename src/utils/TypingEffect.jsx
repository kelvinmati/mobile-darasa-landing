import React, { useState, useEffect } from "react";

const TypingEffect = (props) => {
  const { words } = props;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const wordPause = 2000; // Pause between words

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        // Deleting text
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        // When deletion is complete
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing text
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        // When word is complete
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), wordPause);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting]);

  return (
    <span className="text-primaryRed">
      {currentText}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
};

export default TypingEffect;
