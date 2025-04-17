export const delayFn = async (delay = 1000) => {
  return await new Promise((res) => setInterval(res, delay));
};
