function Main(input) {
    input = input.trim().split("\n");

    const N = input[0];
    const S = input[1].split("");

    let cnt = 0;

    for (let i = 0; i < (N - 2); i++) {
        if (S[i] === "#" && S[i + 2] === "#" && S[i + 1] === ".") {
            cnt++;
        }
    }

    console.log(cnt);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));