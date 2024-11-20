function Main(input) {
    const inputs = input.trim().split("|");
    const lineAmount = inputs.map((line) => line.length);

    // 先頭と末尾の要素を削除
    lineAmount.shift();
    lineAmount.pop();

    console.log(lineAmount.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

    // const tmp = input.trim().split("|");

    // // 先頭と末尾の要素を削除
    // tmp.shift();
    // tmp.pop();

    // let lineAmount = [];

    // for (let i = 0; i < tmp.length; i++) {
    //     lineAmount.push(tmp[i].split("").length);
    // }
    
    // console.log(lineAmount.join(" "));