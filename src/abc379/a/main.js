function Main(input) {
    const [a, b, c] = input.trim().split("");
    console.log(b+c+a, c+a+b);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 3分