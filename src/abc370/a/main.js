function Main(input) {
    const [L, R] = input.trim().split(" ").map(Number);

    if (L + R === 1) {
        console.log(L === 1 ? "Yes" : "No");
    } else {
        console.log("Invalid");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));