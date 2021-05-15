// TODO なんでこれダメなん？？

// mock
const N = 4;
const H = [10, 30, 40, 20];

// memo -1で各要素を初期化
const memo = [-1, -1, -1, -1];

// 最初のコストは0
memo[0] = 0;
memo[1] = Math.abs(H[1] - H[0]);

const Fn = (pos) => {
  if (pos >= N) return 999999;

  if (pos === N) return 0;

  if (memo[pos] !== -1) {
    console.log("最小のcostの総和は", memo);

    return memo[pos];
  } else {
    const st1 = Fn(pos + 1) + Math.abs(H[pos + 1] - H[pos]);
    const st2 = Fn(pos + 2) + Math.abs(H[pos + 2] - H[pos]);

    console.log("最小のcostの総和は", memo);

    return (memo[pos] = Math.min(st1, st2));
  }
};

// N-2
for (let i = 1; i < N; i++) {
  memo[i] = Fn(i);
}

//  [ 0, 20, 30, 30 ]
