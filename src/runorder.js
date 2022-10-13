function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run(value) {
  console.log("run(" + value + ") - This is synchronous");
  await delay(100);
  console.log("run(" + value + ") - This is asynchronous, because it's after `await`");
}

async function test(){
  console.log("Print 1");
  run(1);       // <== WITHOUT await
  console.log("Print 2");
  await run(2); // <== With await
  console.log("Print 3");
}

test();