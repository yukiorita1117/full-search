// 条件
// 10,000円札、5,000円札、1,000円札の総数が N
// 合計金額が Y円

// N枚 で Y円のパターンがあり得る場合は それぞれの枚数を標準出力。
// そうでなければ -1,-1,-1 を出力する。

// 本来以下の二つはシステムから受け取る。今回はモック。
const Y = 45000;
const N = 9;

let flag = false;

// 5,000円ベース
for (let i = 0; i <= 8; i++) {
  // A は千円札の枚数、鶴亀算により算出。
  const A = (10000 * N - Y) / 9000;
  const sumMoney = 10000 * (N - A - i) + 5000 * i + 1000 * A;
  if (sumMoney === Y) {
    console.log("10,000円札、5,000円札、1,000円札:", N - A - i, i, A);
    flag = true;
  }
}
if (!flag) console.log(-1, -1, -1);
