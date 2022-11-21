function calcMaxProfit(prices) {
  let maxProfit = 0;
  let maxPrice = -Infinity;
  for (let i = prices.length - 1; i > 0; i--) {
    const price = prices[i];
    if (maxPrice < price) {
      maxPrice = price;
    }
    let profit = maxPrice - price;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}

console.log(calcMaxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(calcMaxProfit([7, 6, 4, 3, 1])); // 0
console.log(calcMaxProfit([3, 1, 4, 8, 7, 2, 5])); // 7

// T: O(n) | S: (1)
