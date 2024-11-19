function Main(input) {
    const values = input.split("\n").map((num) => Number(num));

    const coin500Count = values[0]; // 500円
    const coin100Count = values[1]; // 100円
    const coin50Count = values[2]; // 50円
    const totalAmount = values[3]; // 合計金額

    let result = 0; // 何通りあるか
    
    for (let i = 0; i <= coin500Count; i++) {
        for (let j = 0; j <= coin100Count; j++) {
            for (let k = 0; k <= coin50Count; k++) {
                sum = 500 * i + 100 * j + 50 * k;
                if (sum === totalAmount) {
                    result++;
                }
            }
        }
    }

    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));