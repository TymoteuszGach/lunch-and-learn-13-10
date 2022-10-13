function foo() {
    console.log("now: " + new Date().toISOString());

    setTimeout(() => {
        console.log("after one second?: " + new Date().toISOString());
    }, 1_000);

    for (let i = 0; i < 10_000_000_000; i++) {}

    console.log("finished: " + new Date().toISOString());
}

foo();