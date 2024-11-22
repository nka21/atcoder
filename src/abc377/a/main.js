function Main(input) {
    input = input.trim().split("").sort().join("");
    console.log(input === "ABC" ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));