function Main(input) {
    const lines = input.split("\n");
    const [N, K] = lines[0].trim().split(" ").map(Number);
    const S = lines[1].split("");

    let count = 0;
    let ans = 0;

    for (let i = 0; i < N; i++) {
        if (S[i] === "O") {
            count++;
        } else {
            // 連続しなくなったら、初期化
            count = 0;
        }

        if (count === K) {
            ans++;
            count = 0;
        }
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 17:03 -> 18:03
// 自分の解答
// const lines = input.trim().split("\n")
// const teeth = lines[1];

// const normalTooth = teeth.split("X");
// const canEatStarwberriesAmount = lines[0].split(" ").pop();

// let result = 0;

// for (let i = 0; i < normalTooth.length; i++) {
//     const normalToothLength = normalTooth[i].split("").length;

//     // 連続する正常の歯の数
//     if (normalToothLength >= canEatStarwberriesAmount) {
//         // いちごを食べれるまで食べる
//         for (let j = 1; j <= normalToothLength / canEatStarwberriesAmount; j++) {
//             result++;
//         }
//     }
// }

// console.log(result);