import  { useState, useEffect } from 'react';

const TextChange = () => {
  const [currentText, setCurrentText] = useState('');
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const texts = ["Hi, I'm Kishan", "I'm a Frontend Developer"];

    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length) {
        setIsForward(false);
      }
      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setCurrentText
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return <h1>{currentText}</h1>;
};

export default TextChange;