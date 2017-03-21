cocktails = (function() {
	function item(name, type, kind) {
		return Object.assign({
			name: name,
			type: type,
			kind: kind
		},
		{
			toString: () => {
				return name;
			}
		});
	};

	function spirit(name) {
		var o = item(name, "spirit");
		return Object.assign(
			o,
			{
				toString: () => {
					return o.name + "(" + o.kind + ")"
				}
			}
		);
	};

	function gin(name) {
		return Object.assign(
			spirit(name), {
				kind: "gin"
			}
		);
	};

	function whisky(name) {
		return Object.assign(
			spirit(name), {
				kind: "whisky"
			}
		);
	};

	function rum(name) {
		return Object.assign(
			spirit(name), {
				kind: "rum"
			}
		);
	};

	function tequila(name) {
		return Object.assign(
			spirit(name), {
				kind: "tequila"
			}
		);
	};

	function vodka(name) {
		return Object.assign(
			spirit(name), {
				kind: "vodka"
			}
		);
	};

	function liqueur(name, kind) {
		var o = item(name, "liqueur", kind);
		return Object.assign(
			o,
			{
				toString: function() {
					return o.name + "(" + o.kind + " " + o.type + ")"
				}
			}
		);
	};

	function gomme(name, kind) {
		return item(name, "gomme", kind);
	};

	function citrus(name, kind) {
		return item(name, "citrus", kind);
	};

	function juice(name, kind) {
		return item(name, "juice", kind);
	};

	function dairy(name) {
		return item(name, "dairy", name);
	};

	function coffee(name) {
		return item(name, "coffee", name);
	}

	function puree(name) {
		return item(name, "purée", name);
	};

	function fruit(name, kind) {
		return item(name, "fruit", kind || name);
	};

	function ingredient(item, measure) {
		var o = Object.assign({}, item);
		return Object.assign(o, {
			measure: measure,
			toString: function() {
				return measure + " " + item.toString();
			}
		});
	};

	function cocktail(name, recipe, glass, notes) {
		var o = {
			name: name,
			recipe: recipe.map((duo) => {
				return ingredient(duo[0], duo[1]);
			}),
			glass: glass,
			notes: notes,
			toString: () => {
				return name;
			}
		};
		return o;
	};

	function sour_cocktail(name, spirit) {
		return cocktail(
			name,
			[
				[spirit, 2],
				[CITRUS.LEMON, 1],
				[GOMME.REGULAR, 0.8],
				[FRUIT.EGG, 1]
			],
			GLASS.SMALL,
			"Shake once with no ice (wrap in a towel). Shake again with ice."
		);
	};

	function old_cocktail(name, spirit) {
		return cocktail(
			name,
			[
				[spirit, 2],
				[FRUIT.ORANGE_PEEL, 0.5]
			],
			GLASS.OLD_FASHIONED,
			"Takes 5 to 10 minutes to make."
		);
	};



	var RUM = {
		BACARDI: rum("Bacardi"),
		BACARDI_GOLD: rum("Bacardi Gold"),
		BRUGAL: rum("Brugal")
	};

	var TEQUILA = {
		AQUA_RIVE: tequila("Aqua Rive"),
	};

	var VODKA = {
		SMIRNOFF: vodka("Smirnoff"),
		KETEL_ONE: vodka("Ketel One"),
		CITRON: vodka("Ketel One Citron"),
		CARIEL: vodka("Cariel Vanilla"),
		CIROC_MANGO: vodka("Ciroc Mango")
	};

	var WHISKY = {
		HAIG: whisky("Haig Clubman"),
		JW_RED: whisky("Johnny Walker Red"),
		BULLEIT: whisky("Bulleit Bourbon")
	};

	var GIN = {
		TANQUERAY: gin("Tanqueray"),
	};

	var LIQUEUR = {
		RASPBERRY: {
			CHAMBORD: liqueur("Chambord", "raspberry")
		},
		PEACH: {
			CREME_DE_PECHE: liqueur("Crème de Pêche", "liqueur")
		},
		STRAWBERRY: {
			CREME_DE_FRAISE: liqueur("Crème de Fraise", "strawberry")
		},
		LEMON: {
			LIMONCELLO: liqueur("Limoncello", "lemon")
		},
		LYCHEE: {
			KWAI_FEH: liqueur("Kwai Feh", "lychee")
		},
		ORANGE: {
			TRIPLE_SEC: liqueur("Triple Sec", "orange")
		},
		APRICOT: {
			BRANDY: liqueur("Apricot Brandy", "apricot")
		},
		PASSIONFRUIT: {
			PASSOA: liqueur("Passoa", "passionfruit")
		},
		BLACKBERRY: {
			CREME_DE_MURE: liqueur("Crème de Mûre", "blackberry")
		},
		VIOLET_FLOWER: {
			CREME_DE_VIOLETTE: liqueur("Crème de Violette", "floral")
		},
		COFFEE: {
			KHALUA: liqueur("Khalua", "coffee"),
			SALTED_KHALUA: liqueur("Khalua", "coffee")
		},
		ALMOND: {
			AMARETTO: liqueur("Amaretto", "almond")
		}
	};

	var GOMME = {
		REGULAR: gomme("Regular Gomme", "regular"),
		ROSE: gomme("Monin Rose", "rose"),
		WATERMELON: gomme("Monin Watermelon", "watermelon"),
		VANILLA: gomme("Vanilla Gomme", "vanilla"),
		ELDERFLOWER: gomme("Elderflower", "elderflower"),
		ORGEAT: gomme("Syrop Orgeat", "orgeat"),
		HONEY: gomme("Honey", "honey"),
		SPICED: gomme("Spiced Gomme", "spicy")
	};

	var CITRUS = {
		LEMON: citrus("lemon juice", "lemon"),
		LIME: citrus("lime juice", "lime")
	};

	var JUICE = {
		APPLE: juice("apple juice", "apple"),
		PINEAPPLE: juice("pineapple juice", "pineapple"),
		ORANGE: juice("orange juice", "orange"),
		CRANBERRY: juice("cranberry juice", "cranberry")
	};

	var DAIRY = {
		MILK: dairy("milk"),
		CREAM: dairy("creme")
	};

	var COFFEE = {
		ESPRESSO: coffee("espresso")
	};

	var PUREE = {
		PASSIONFRUIT: puree("passionfruit"),
		LYCHEE: puree("lychee"),
		STRAWBERRY: puree("strawberry"),
		RASPBERRY: puree("raspberry"),
		PEACH: puree("peach"),
		MANGO: puree("mango")
	};


	var FRUIT = {
		RASPBERRY: fruit("raspberry"),
		BLUEBERRY: fruit("blueberry"),
		BLACKBERRY: fruit("blackberry"),
		WATERMELON: fruit("watermelon"),
		CUCUMBER: fruit("cucumber"),
		ORANGE_PEEL: fruit("orange peel", "zest"),
		MINT: fruit("mint", "leaves"),
		BASIL: fruit("basil", "leaves"),
		EGG: fruit("egg white", "egg")
	};

	var GLASS = {
		SMALL: "lowball",
		TALL: "highball",
		COUPE: "coupe",
		SLING: "sling",
		FLUTE: "flute",
		PINT: "pint",
		OLD_FASHIONED: "old fashioned"
	};

	var COCKTAILS = {
		RASPBERRY_BERET: cocktail(
			"Raspberry Beret",
			[
				[VODKA.SMIRNOFF, 1],
				[LIQUEUR.RASPBERRY.CHAMBORD, 1],
				[GOMME.ELDERFLOWER, 0.4],
				[CITRUS.LIME, 1],
				[JUICE.APPLE, 2]
			],
			GLASS.TALL
		),
		LEMON_BONBON: cocktail(
			"Lemon Bon Bon",
			[
				[VODKA.SMIRNOFF, 1],
				[LIQUEUR.LEMON.LIMONCELLO, 1],
				[GOMME.VANILLA, 0.8],
				[CITRUS.LEMON, 1]
			],
			GLASS.COUPE
		),
		ZOMBIE: cocktail(
			"Zombie",
			[
				[RUM.BACARDI, 1],
				[RUM.BRUGAL, 1],
				[LIQUEUR.APRICOT.BRANDY, 0.5],
				[GOMME.ORGEAT, 0.5],
				[CITRUS.LIME, 1],
				[JUICE.PINEAPPLE, 2],
			],
			GLASS.PINT,
			"Garnish with half a passionfruit with its insides removed and replaced with 10ml of Wray &amp; Nephew."
		),
		BRAMBLE: cocktail(
			"Bramble",
			[
				[GIN.TANQUERAY, 1.5],
				[CITRUS.LEMON, 1],
				[GOMME.REGULAR, 0.8],
				[LIQUEUR.BLACKBERRY.CREME_DE_MURE, 0.5]
			],
			GLASS.SMALL,
			"Build over crushed ice."
		),
		OLD_SALTY: cocktail(
			"Old Salty",
			[
				[LIQUEUR.COFFEE.SALTED_KHALUA, 1],
				[VODKA.CARIEL, 1],
				[DAIRY.MILK, 0.5],
				[DAIRY.CREAM, 0.5]
			],
			GLASS.SMALL,
			"Add Khalua to glass with cubed ice. Shake only the dairy and the vodka."
		),
		PORNSTAR: cocktail(
			"Pornstar Martini",
			[
				[VODKA.KETEL_ONE, 1],
				[LIQUEUR.PASSIONFRUIT.PASSOA, 1],
				[CITRUS.LIME, 0.8],
				[GOMME.VANILLA, 0.6],
				[PUREE.PASSIONFRUIT, 0.5]
			],
			GLASS.COUPE,
			"Garnish with half a passionfruit. Add a shot of prosecco on the side."
		),
		HO_CHIN: cocktail(
			"Ho Chin",
			[
				[VODKA.SMIRNOFF, 2],
				[CITRUS.LIME, 1],
				[GOMME.WATERMELON, 1],
				[JUICE.APPLE, 1],
				[FRUIT.MINT, 8]
			],
			GLASS.SLING,
			"Blend with a scoop of ice, bro."
		),
		MOJITO: cocktail(
			"Mojito",
			[
				[RUM.BACARDI, 2],
				[CITRUS.LIME, 1],
				[GOMME.REGULAR, 0.8],
				[FRUIT.MINT, 6]
			],
			GLASS.TALL,
			"Build over crushed ice."
		),
		ESPRESSO_MARTINI: cocktail(
			"Espresso Martini",
			[
				[WHISKY.HAIG, 1.5],
				[LIQUEUR.COFFEE.KHALUA, 0.5],
				[GOMME.VANILLA, 0.5],
				[COFFEE.ESPRESSO, 2]
			],
			GLASS.COUPE
		),
		ROSE_PETAL_MARTINI: cocktail(
			"Rose Petal Martini",
			[
				[GIN.TANQUERAY, 2],
				[CITRUS.LEMON, 1],
				[JUICE.APPLE, 1],
				[GOMME.ROSE, 0.8]
			],
			GLASS.COUPE,
			"Garnish with edible flowers, yo."
		),
		FRENCH_MARTINI: cocktail(
			"French Martini",
			[
				[VODKA.SMIRNOFF, 1],
				[LIQUEUR.RASPBERRY.CHAMBORD, 1],
				[JUICE.PINEAPPLE, 2]
			],
			GLASS.COUPE
		),
		COSMOPOLITAN: cocktail(
			"Cosmopolitan",
			[
				[VODKA.CITRON, 1.5],
				[LIQUEUR.ORANGE.TRIPLE_SEC, 0.5],
				[CITRUS.LIME, 0.8],
				[JUICE.CRANBERRY, 2]
			],
			GLASS.COUPE
		),
		DESERT_ROSE: cocktail(
			"Desert Rose",
			[
				[TEQUILA.AQUA_RIVE, 1],
				[LIQUEUR.RASPBERRY.CHAMBORD, 1],
				[CITRUS.LEMON, 1],
				[GOMME.HONEY, 0.8]
			],
			GLASS.COUPE,
			"Garnish with edible flowers."
		),
		BLUSHING_DRAGON: cocktail(
			"Blushing Dragon",
			[
				[FRUIT.BLACKBERRY, 1],
				[FRUIT.RASPBERRY, 4],
				[FRUIT.BLUEBERRY, 8],
				[VODKA.CIROC_MANGO, 1],
				[LIQUEUR.ORANGE.TRIPLE_SEC, 1],
				[CITRUS.LEMON, 1],
				[PUREE.MANGO, 1]
			],
			GLASS.TALL,
			"Muddle the fruit in a boston first. After shaking, pour over crushed ice."
		),
		SILK_ROAD_SOUR: cocktail(
			"Silk Road Sour",
			[
				[VODKA.SMIRNOFF, 1],
				[CITRUS.LEMON, 1],
				[GOMME.SPICED, 0.8]
			],
			GLASS.SMALL
		),
		MT_FUJI: cocktail(
			"Mt Fuji",
			[
				[RUM.BACARDI, 2],
				[CITRUS.LIME, 1],
				[GOMME.REGULAR, 0.8],
				[FRUIT.MINT, 6],
				[FRUIT.CUCUMBER, 3]
			],
			GLASS.COUPE,
			"Garnish with some cucumber slices."
		),
		// RUMTING: cocktail(
		// 	"Rumting",
		// 	[
		// 		[RUM.BRUGAL, 1.5],
		// 		[LIQUEUR.PASSIONFRUIT.PASSOA, 0.5],
		// 		[CITRUS.LIME, 1],
		// 		[AGAVE?]
		// 	],
		// 	GLASS.SLING
		// ),
		ORCHID_BLOSSOM: cocktail(
			"Orchid Blossom",
			[
				[RUM.BACARDI, 1.5],
				[LIQUEUR.LYCHEE.KWAI_FEH, 0.5],
				[CITRUS.LIME, 1],
				[PUREE.STRAWBERRY, 1],
				[PUREE.LYCHEE, 1]
			],
			GLASS.SLING
		),
		// SAIGON_SLING: cocktail(
		// 	"Saigon Sling",
		// 	[
		// 		[GIN.TANQUERAY, 1.5],
		// 		[LIQUEUR.ORANGE.TRIPLE_SEC, 0.5],
		// 		[CITRUS.LEMON, 1],
		// 		[GOMME.REGULAR, 0.8],
		// 		[JUICE.ORANGE, 1],
		// 		[BASIL LEAVES?]
		// 		[MATCHA?]
		// 	],
		// 	GLASS.SLING
		// ),
		SOUR: {
			WHISKY: sour_cocktail("Whisky Sour", WHISKY.JW_RED),
			BOURBON: sour_cocktail("Bourbon Sour", WHISKY.BULLEIT),
			GIN: sour_cocktail("Gin Sour", GIN.TANQUERAY),
			AMARETTO: sour_cocktail("Amaretto Sour", LIQUEUR.ALMOND.AMARETTO),
		}
	};

	return [
		COCKTAILS.RASPBERRY_BERET,
		COCKTAILS.BRAMBLE,
		COCKTAILS.ZOMBIE,
		COCKTAILS.MOJITO,
		COCKTAILS.PORNSTAR,
		COCKTAILS.ESPRESSO_MARTINI,
		COCKTAILS.ROSE_PETAL_MARTINI,
		COCKTAILS.FRENCH_MARTINI,
		COCKTAILS.COSMOPOLITAN,
		COCKTAILS.LEMON_BONBON,
		COCKTAILS.DESERT_ROSE,
		COCKTAILS.OLD_SALTY,
		COCKTAILS.BLUSHING_DRAGON,
		COCKTAILS.SILK_ROAD_SOUR,
		COCKTAILS.MT_FUJI,
		COCKTAILS.HO_CHIN,
		// COCKTAILS.RUMTING,
		COCKTAILS.ORCHID_BLOSSOM,
		COCKTAILS.SOUR.WHISKY,
		COCKTAILS.SOUR.BOURBON,
		COCKTAILS.SOUR.GIN,
		COCKTAILS.SOUR.AMARETTO,
		// COCKTAILS.SAIGON_SLING,
		// COCKTAILS.MODERN_MAN
	];
})();