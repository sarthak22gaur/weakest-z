const MAX_CONTESTANTS = 142;
export const findContestants: (anotherOne?: number) => number = (anotherOne) => {
  const fighterId = Math.floor(Math.random() * (MAX_CONTESTANTS - 1) + 1);

  if (fighterId === anotherOne) return findContestants(anotherOne); 
  return fighterId;  
};

export const getContestants = () => {
  const firstFighter = findContestants();
  const secondFighter = findContestants(firstFighter);
  if (!firstFighter || !secondFighter) throw new Error("Fighter not found")
  else
  return [firstFighter, secondFighter];
}
