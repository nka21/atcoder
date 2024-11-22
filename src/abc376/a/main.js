function Main(input) {
    input = input.split("\n");

    // 高橋君がボタンを押した総回数, 前回飴を貰ってからの経過時間
    const [totalCount, lastCandyElapsedTime] = input[0].split(" ").map(Number);

    // 初めてボタンを押してからの経過時間
    const elapsedTime = input[1].trim().split(" ").map(Number);

    // 前回飴を貰った時間
    let lastTime = elapsedTime[0];

    // 高橋君が貰うことの出来る飴の個数
    let ans = 1;

    for (let i = 0; i < totalCount; i++) {
        // 初めてボタンを押す時は必ず飴が貰えるため、2回目以降から
        if (elapsedTime[i] - lastTime >= lastCandyElapsedTime) {
            ans++;
            lastTime = elapsedTime[i];
        }
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));