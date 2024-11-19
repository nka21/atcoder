function Main(input) {
    const [A, B, C, totalAmount] = input.split("\n").map((num) => Number(num));

    let result = 0; // 何通りあるか
    
    // 500円玉を0~A枚
    for (let i = 0; i <= A; i++) {
        // 100円玉を0~B枚
        for (let j = 0; j <= B; j++) {
            // 50円玉を0~C枚
            for (let k = 0; k <= C; k++) {
                // 硬貨の計算
                sum = (500 * i) + (100 * j) + (50 * k);
                if (sum === totalAmount) {
                    result++;
                }
            }
        }
    }

    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));