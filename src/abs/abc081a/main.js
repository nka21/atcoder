function Main(input) {
    input = input.split("");
    
    console.log(input.filter((value) => value === "1").length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));