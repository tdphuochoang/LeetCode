/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (!prices.length || prices.length <= 1) return 0;
	let i = 1;
	let minBuy = prices[0];
	let profit = 0;
	while (i < prices.length) {
		minBuy = Math.min(minBuy, prices[i]);
		profit = Math.max(profit, prices[i] - minBuy);
		i++;
	}
	return profit;
};
