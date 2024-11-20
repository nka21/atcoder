function Main(input) {
    const lines = input.split("\n");
    // 先頭の要素を削除
    lines.shift();
    // 最後の要素を削除
    lines.pop();
    // 重複する要素を削除
    const tiers = Array.from(new Set(lines));

    console.log(tiers.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 25分