function Main(input) {
    const [A, B] = input.trim().split(" ").map(Number);
    
    let ans = 0;
    
    for (let i = -100; i <= 200; i++) {
        input[2] = i;

        const sortedArray = [A, B, i].sort((a, b) => a - b); // 数字の小さい順にソート
        const [a, b, c] = sortedArray;

        if (b - a === c - b) {
            ans++;
        }
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));