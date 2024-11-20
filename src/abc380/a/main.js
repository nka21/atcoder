function Main(input) {
    const num = input.trim().split("").sort().join("");
    console.log(num === "122333" ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 12分 最初の解答
//     const digits = input.split("");

//     const digit1Length = digits
//         .filter((digit) => digit === "1").length; // 1
//     const digit2Length = digits
//         .filter((digit) => digit === "2").length; // 2
//     const digit3Length = digits
//         .filter((digit) => digit === "3").length; // 3

//     const terms =
//         digit1Length === 1 &&
//         digit2Length === 2 &&
//         digit3Length === 3;

//     if (terms) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
