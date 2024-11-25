function Main(input) {
    S = input.trim().split("\n");
    let ans = 0;

    for (let i = 0; i < S.length; i++) {
        if (i+1 === S[i].length) {
            ans++;
        }
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 18:55~