function Main(input) {
    const [AB, AC, BC] = input.trim().split(" ");

    let siblings = [
        { name: "A", rank: 0 },
        { name: "B", rank: 0 },
        { name: "C", rank: 0 },
    ];

    if (AB === "<") {
        siblings[1].rank++; // A < B
    } else {
        siblings[0].rank++; // B < A
    }

    if (AC === "<") {
        siblings[2].rank++; // A < C
    } else {
        siblings[0].rank++; // C < A
    }

    if (BC === "<") {
        siblings[2].rank++; // B < C
    } else {
        siblings[1].rank++; // C < B
    }

    const ans = siblings.find((sibling) => sibling.rank === 1).name;
    
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));