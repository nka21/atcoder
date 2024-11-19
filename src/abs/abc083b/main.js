function Main(input) {
    const [n, a, b] = input.split(" ").map((v) => Number(v));

    let result = [];

    // 数字n以下の整数
    for (let i = 1; i <= n; i++) {
        // iを分割
        const digits = String(i).split("").map((v) => Number(v));
        // 各桁の総和
        const digitSum = digits
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        
        if (digitSum >= a && digitSum <= b) {
            result.push(i);
        }
    }

    // resultの総和を出力
    console.log(result.reduce((a, c) => a + c, 0));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 35分