// We have our cocktails... let's work with 'em!

var _search = document.getElementById("cocktail_search");
var _input = _search.getElementsByTagName("span")[0];
var _output = _search.getElementsByClassName("Results")[0];

_input.innerHTML = _input.getAttribute("placeholder");

_input.addEventListener('focus', function onfocus(e) {
	e.target.innerHTML = "";
	e.target.removeEventListener('focus', onfocus);
});

_input.addEventListener('keyup', (e) => {
	var text = e.target.innerHTML;
	_output.innerHTML = ""; // TODO: change this to calculate a difference
	if (text.length >= 3) {
		// TODO: change this to calculate a difference.
		var gui = search(text).map(render_cocktail);
		gui.forEach((cocktail) => {
			_output.appendChild(cocktail);
		});
	}
}, false);

function make(el, args) {
	var el = document.createElement(el);
	return Object.assign(el, args);
};

function render_header(title) {
	return make("h3", {
		innerHTML: title
	});
};

function render_recipe(list) {
	var ul = make("ul");
	list.map((ingredient) => {
		return make("li", {
			innerHTML: ingredient.toString()
		});
	}).forEach((list_item) => {
		ul.appendChild(list_item);
	});
	return ul;
};

function render_misc(cocktail) {
	return make("p", {
		innerHTML: "Served in a " +
			cocktail.glass + "<br />" +
			(cocktail.notes || "")
	});
};

function render_cocktail(cocktail) {
	var el = make("div", {
		className: "Cocktail",
		id: cocktail.name
	});
	el.appendChild(render_header(cocktail.name));
	el.appendChild(render_recipe(cocktail.recipe));
	el.appendChild(render_misc(cocktail));
	return el;
};