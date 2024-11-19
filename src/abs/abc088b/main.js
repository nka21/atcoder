function Main(input) {
    const lines = input.split("\n");
    let cards = lines[1].split(" ").map((v) => Number(v));

    let selectedAlice = 0;
    let selectedBob = 0;

    for (let i = 1; i <= lines[0]; i++) {
        // 最も大きい札を取る戦略
        const maxCard = Math.max(...cards);
        // 選択した札を配列から削除
        cards.splice(cards.indexOf(maxCard), 1);

        if (i % 2 != 0) {
            // 先攻
            selectedAlice += maxCard;
        } else {
            // 後攻
            selectedBob += maxCard;
        }
    }

    console.log(selectedAlice - selectedBob);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 50分