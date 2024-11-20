function Main(input) {
    const ballColors = input.trim().split(" ").map(Number);

    let ans = 0;

    for (let i = 1; i <= 4; i++) {
        const filterColor = ballColors.filter((color) => color === i);

        if (filterColor.length >= 2) {
            ans++;
            
            if (filterColor.length === 4) {
                ans++;
            }
        }
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));