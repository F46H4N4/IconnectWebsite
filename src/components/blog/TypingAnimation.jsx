import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Clean up interval on unmount
  }, [index, text, typingSpeed]);

  return <span>{displayedText}</span>;
};

export default TypingAnimation;
