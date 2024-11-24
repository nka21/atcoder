function Main(input) {
    S = input.trim().slice(-3);
    console.log(S === "san" ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));