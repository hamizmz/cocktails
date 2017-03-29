// We have our cocktails... let's work with 'em!

var _search = document.getElementById("cocktail_search");
var _input = _search.getElementsByClassName("InputBox")[0];
var _output = _search.getElementsByClassName("Results")[0];

_input.blur();
_input.innerHTML = _input.getAttribute("placeholder");
_input.setAttribute("active", "false");

_input.addEventListener('focus', (e) => {
	if (e.target.innerHTML !== e.target.getAttribute("placeholder"))
		return;
	e.target.innerHTML = "";
	e.target.setAttribute("active", "true");
});

_input.addEventListener('blur', (e) => {
	if (e.target.innerHTML.trim() === "") {
		e.target.innerHTML = e.target.getAttribute("placeholder");
		e.target.setAttribute("active", "false");
	}
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

// (function(target, interval) {
// 	var placeholder = target.getAttribute("placeholder");
// 	var counter = 0;
// 	setInterval((e) => {
// 		if (target.getAttribute("active") == "false") {
// 			let output = placeholder;
// 			for (let i = counter; i > 0; i--)
// 				output += ".";
// 			target.innerHTML = output;
// 			counter = cycle(0, 4, counter, 1);
// 		}
// 	}, interval);
// })(_input, 650);

function cycle(start, end, current, increment) {
	current += increment;
	if (current === end)
		return start;
	return current;
};

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