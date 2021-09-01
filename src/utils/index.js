export const sortPrices = (prices) => {
	console.log(prices);
	if (prices.length > 0) {
		prices.sort(function (a, b) {
			// Turn your strings into dates, and then subtract them
			// to get a value that is either negative, positive, or zero.
			return new Date(b.date) - new Date(a.date);
		});
	}
	return [];
};
