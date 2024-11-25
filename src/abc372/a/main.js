function Main(input) {
    const S = input.trim().split("");

    let ans = [];

    for (let i = 0; i < S.length; i++) {
        if (!(S[i] === ".")) {
            ans.push(S[i]);
        }
    }

    console.log(ans.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));