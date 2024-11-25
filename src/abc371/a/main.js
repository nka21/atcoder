function Main(input) {
    const S = input.trim().split(" ");

    let siblings = [
        { name: "A", rank: 0 },
        { name: "B", rank: 0 },
        { name: "C", rank: 0 },
    ];

    if (S[0] === "<") {
        siblings[1].rank++; // A < B
    } else {
        siblings[0].rank++; // B < A
    }

    if (S[1] === "<") {
        siblings[2].rank++; // A < C
    } else {
        siblings[0].rank++; // C < A
    }

    if (S[2] === "<") {
        siblings[2].rank++; // B < C
    } else {
        siblings[1].rank++; // C < B
    }

    const answer = siblings.find((item) => item.rank === 1).name;
    
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));