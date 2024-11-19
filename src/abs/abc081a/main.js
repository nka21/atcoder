function Main(input) {
    const result = input
        .split("")
        .filter((str) => str === "1")
        .length;
    
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));