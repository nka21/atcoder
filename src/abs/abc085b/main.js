function Main(input) {
    const lines = input.split("\n");

    // 先頭と末尾の要素を削除
    lines.shift();
    lines.pop();
    
    // 重複する要素を削除し、段数を計算
    const tiers = Array.from(new Set(lines)).length;

    console.log(tiers);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 25分