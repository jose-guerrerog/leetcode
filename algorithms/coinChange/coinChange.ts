function coinChange(coins: number[], amount: number): number {
  const memo = new Array(10005);
  memo[0] = 0;

  const getMinCoins = (coins: number[], n: number): number => {
    if (memo[n] !== undefined) {
      return memo[n];
    }

    memo[n] = Number.MAX_VALUE;

    for (let i = 0; i < coins.length; i++) {
      if (n < coins[i]) {
        continue;
      }
      const partialMinCoins = getMinCoins(coins, n - coins[i]);
      if (partialMinCoins !== Number.MAX_VALUE) {
        memo[n] = Math.min(memo[n], partialMinCoins + 1);
      }
    }

    return memo[n];
  };

  const minCoins = getMinCoins(coins, amount);

  return minCoins === Number.MAX_VALUE ? -1 : minCoins;
}
