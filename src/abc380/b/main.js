function Main(input) {
    const tmp = input.trim().split("|");

    // 先頭と末尾の要素を削除
    tmp.shift();
    tmp.pop();

    let lineAmount = [];

    for (let i = 0; i < tmp.length; i++) {
        lineAmount.push(tmp[i].split("").length);
    }
    
    console.log(lineAmount.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));