function Main(input) {
    input = input.split("\n");
    const tmp = input[1].split(" ");

    const a = Number(input[0]);
    const b = Number(tmp[0]);
    const c = Number(tmp[1]);
    const s = input[2];

    console.log(`${a+b+c} ${s}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));