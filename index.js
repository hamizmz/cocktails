// We have our cocktails... let's work with 'em!

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
	console.log(source, query);
	return sliding_compare(source.slice(0), query);
};

function search(query) {
	// What we're going to do is filter the cocktail list...
	return cocktails.filter((cocktail) => {
		return match(cocktail.name.toLowerCase(), query.trim().toLowerCase());
	});
};

function cocktail_search(input, output) {
	input.addEventListener('keyup', (e) => {
		var text = input.value;
		if (text.length >= 3) {
			output.innerHTML = search(text).map((cocktail) => {
				return cocktail.name;
			}).join("<br />");
		} else {
			output.innerHTML = "";
		}
	}, false);
};

var _search = document.getElementById("cocktail_search");
var _input = _search.getElementsByTagName("input")[0];
var _output = _search.getElementsByTagName("div")[0];

cocktail_search(_input, _output);