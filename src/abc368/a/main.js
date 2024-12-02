function Main(input) {
    input = input.trim().split("\n");

    const [N, K] = input[0].split(" ").map(Number);
    const numArray = input[1].split(" ");

    for (let i = 0; i < K; i++) {
        numArray.unshift(numArray.pop())
    }

    console.log(numArray.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));