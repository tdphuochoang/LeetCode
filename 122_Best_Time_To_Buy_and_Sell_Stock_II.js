/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			let temp = prices[i] - prices[i - 1];
			profit += temp;
		}
	}
	return profit;
};
