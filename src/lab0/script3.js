function foo() {
    setTimeout(() => console.log("A"));

    Promise.resolve()
        .then(() => console.log("B"));

    console.log("C");
}

foo();