search = (function() {
	function compare(a, b) {
		return a === b;
	};

	function sliding_compare(a, b) {
		if (a.length === 0)
			return false;
		if (compare(a.slice(0, b.length), b))
			return true;
		return sliding_compare(a.slice(1), b);
	};

	function match(source, query) {
		return sliding_compare(source.slice(0), query);
	};

	function search(query) {
		// What we're going to do is filter the cocktail list...
		return cocktails.filter((cocktail) => {
			return match(cocktail.name.toLowerCase(), query.trim().toLowerCase());
		});
	};
	
	return search;
})();