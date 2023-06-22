import * as path from "path";

// https://atcoder.jp/contests/arc162/tasks/arc162_a

function countFastestReturn(input: string) {
  const [[t], ...testCases] = input
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));
  for (let i = 0; i < t; i++) {
    const [numParticipants] = testCases[2 * i];
    const times = testCases[2 * i + 1];
    const rank = [];
    for (let j = 0; j < numParticipants; j++) {
      rank[times[j] - 1] = j + 1;
    }
    let count = 0;
    let currentOp = 0;
    for (let j = 0; j < numParticipants; j++) {
      if (currentOp < rank[j]) {
        count++;
        currentOp = rank[j];
      }
    }
    console.log(count);
  }
}

export function countFastestReturnTest() {
  return countFastestReturn(
    require("fs").readFileSync(path.resolve(__dirname, "../../src/ekiden-race/test-1.txt"), "utf8")
  );
}
