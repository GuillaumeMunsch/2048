const getRandomNumberWithinRange = (min: number, max: number) => {
  const randomDecimal = Math.random();

  const randomNumberInRange = min + randomDecimal * (max - min);

  return Math.floor(randomNumberInRange);
};

export default getRandomNumberWithinRange;
