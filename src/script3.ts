let result = 0;
let running = false;

async function runTest(): Promise<void> {
  if (running) {
    return;
  }
  running = true;

  await Promise.resolve();

  result++;
  running = false;
}

async function start(): Promise<void> {
  const promises: Promise<void>[] = [];
  for (let i = 0; i < 1_000_000; i++) {
    promises.push(runTest())
  }

  await Promise.all(promises);

  console.log(`result = ${result}`);
}

(async () => {
  await start();
})()

export {};