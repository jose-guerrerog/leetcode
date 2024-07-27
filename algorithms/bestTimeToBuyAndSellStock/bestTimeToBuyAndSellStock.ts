function maxProfit(prices: number[]): number {
  let buy = prices[0]
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
      const sell = prices[i];
      if (sell < buy) {
          buy = sell
      }
      else {
          const profit = sell - buy;
          maxProfit = Math.max(maxProfit, profit)
      }
  }

  return maxProfit
};