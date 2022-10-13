function a() {
    console.log("A");
}

function b() {
    console.log("B");
}

function c() {
    b();
    console.log("C");
}

a();
c();