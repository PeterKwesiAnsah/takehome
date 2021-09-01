export const sortPrices = (prices) => {
	if (prices.length > 0) {
		return [...prices].sort(function (a, b) {
			return new Date(b.date) - new Date(a.date);
		});
	}
	return [];
};


export const checkIfProductExist=(pathName)=>{

}