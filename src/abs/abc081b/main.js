function Main(input) {
    input = input.split("\n");
    numArray = input[1].split(" ").map((num) => Number(num));

    let count = 0;

    while (numArray.every((value) => value % 2 === 0)) {
        numArray = numArray.map((value) => value / 2);
        count++;
    }

    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 45分