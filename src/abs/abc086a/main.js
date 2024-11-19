function Main(input) {
    input = input.split(" ").map( str => Number(str));
    console.log(input[0] * input[1] % 2 === 0 ? "Even" : "Odd")
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));