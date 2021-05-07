// 動的計画法

// 1<= i <= N
// 2 < N
// 足場が 1 ~ N まであり、 1マス or 2マス移動が可能
// 移動コスト(iからjまで移動の場合): | Hi - Hj |
// かかるコストの総和の最小値を求める。

// mock
const N = 4;
const H = [10, 30, 40, 20];

// const N = 6;
// const H = [30, 10, 60, 10, 60, 50];

const cost = [];

// 最初のコストは0
cost[0] = 0;
cost[1] = Math.abs(H[1] - H[0]);

for (let i = 2; i < N; i++) {
  const st1 = cost[i - 1] + Math.abs(H[i] - H[i - 1]);
  const st2 = cost[i - 2] + Math.abs(H[i] - H[i - 2]);

  cost[i] = Math.min(st1, st2);
}

console.log("最小のcostの総和は", cost[N - 1]);
