const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};

export const SlowComponentOne = () => {
  wait(400);
  return null;
};

export const SlowComponentTwo = () => {
  wait(400);
  return null;
};
