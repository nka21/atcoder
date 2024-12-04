function Main(input) {
    const [N, T, A] = input.trim().split(" ").map(Number)

    if (Math.max(T, A) > (N / 2 | 0)) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));