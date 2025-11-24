export let sharedCounter = 0;

export function incrementCounter(): number {
  sharedCounter += 1;
  return sharedCounter;
}
