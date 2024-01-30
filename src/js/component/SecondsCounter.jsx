import React, { useEffect, useState } from 'react';
import style from './SecondsCounter.module.css';

const SecondsCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Obtener cada dígito del contador
  const digits = counter
    .toString()
    .padStart(5, '0') // Asegurar que siempre tenga al menos 3 dígitos

  return (
    <div className={style.numbersContainer}>
      <div className={style.numbers}><i class="fa-regular fa-clock"></i></div>
      <div className={style.numbers}>{digits[0]}</div>
      <div className={style.numbers}>{digits[1]}</div>
      <div className={style.numbers}>{digits[2]}</div>
      <div className={style.numbers}>{digits[3]}</div>
      <div className={style.numbers}>{digits[4]}</div>
    </div>
  );
};

export default SecondsCounter;