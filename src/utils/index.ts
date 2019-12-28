export function delay(interval: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}
