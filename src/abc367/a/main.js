function Main(input) {
    let [A, B, C] = input.trim().split(" ").map(Number)

    let result = "";

    while (B != C) {

        if (A === B) {
            result = "No";
            break;
        }

        B++;
        B %= 24;

        result = "Yes";
    }

    console.log(result)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));