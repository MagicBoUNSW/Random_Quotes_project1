// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
	Create an array of JavaScript objects to hold the data for your quotes.
	Name the array quotes.
	The quotes array should be accessible in the global scope, meaning it shouldn't be inside of a function.
*/
	var quotes = [
		{
		quote: "The only thing to fear is fear itself.",
		source: "Franklin Delano Roosevelt",
		citation: "First Inaugural Address",
		year: 1932,
		
		},
		{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
		citation: "",
		year: "1905 - 2005",
		
		},
		{
		quote: "Life shrinks or expands in proportion to one's courage.",
		source: "Anaïs Nin",
		citation: "Diary",
		year: 1969,
		},
		{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
		},
		{
		quote: "Stardust sails endless distances through the silent ages until, white-hot, it strikes a ready heart.",
		source: "Terri Guillemets",
		citation: "Love at first sight",
		year: 2007,
		},
		{
		quote: "Her cheeks burned; a strange new life was in all her veins.",
		source: "Amelia E. Huddleston Barr",
		citation: "A Rose of a Hundred Leaves: A Love Story",
		year: 1891,
		},
		{
		quote: "Positive thinking does not mean trying to create something that is not there. Real positive thinking acknowledges that good already exists — indeed it is all that exists.",
		source: "Alan Cohen",
		citation: "",
		year: 1987,
		},
		{
		quote: "Conditions may make some men, but some men can make conditions.",
		source: "Muriel Strode (1875–1964)",
		citation: "My Little Book of Life",
		year: 1912,
		},
		{
		quote: "We are all in the gutter, but some of us are looking at the stars.",
		source: "Oscar Wilde",
		citation: "Lady Windermere's Fan",
		year: 1893,
		},
		{
		quote: "Heredity is much, environment is much, but I am much more.",
		source: "Muriel Strode (1875–1964)",
		citation: "My Little Book of Life",
		year: 1912,
		},
		{
		quote: "In a day and age when all manner of things are believed against contrary evidence — hey, why not believe there's a little good in everyone.",
		source: "Robert Brault",
		citation: "",
		year: 2017,
		},
		{
		quote: "A positive attitude may not solve all your problems, but it will annoy enough people to make it worth the effort.",
		source: "Herm Albright",
		citation: "Reader's Digest",
		year: 1995,
		},
		{
		quote: "I may not overcome the inevitable, but O, it is mine to see that the inevitable does not overcome me.",
		source: "Muriel Strode (1875–1964)",
		citation: "My Little Book of Prayer",
		year: 1904,
		},
		{
		quote: "The natural role of twentieth-century man is anxiety.",
		source: "Norman Mailer",
		citation: "The Naked and the Dead",
		year: 1947,
		},
		{
		quote: "I reckon being ill as one of the great pleasures of life, provided one is not too ill and is not obliged to work till one is better.",
		source: "Samuel Butler",
		citation: "The Way of All Flesh",
		year: 1903,
		},
		{
		quote: "Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity.",
		source: "World Health Organization",
		citation: "",
		year: 1948,
		},
		{
		quote: "Nothing diminishes anxiety faster than action.",
		source: "Walter Anderson",
		citation: "The Confidence Course",
		year: 2007,
		},
		{
		quote: "Give me a life of action, and I will accept its sorrow and its tragedy, if I may escape the way of inanition.",
		source: "Muriel Strode (1875–1964)",
		citation: "My Little Book of Prayer",
		year: 1904,
		},
	];
	

/*
	Each quote object in the quotes array should have the following properties:
	A quote property which contains a string: the text of the quote that will be displayed on the page.
	A source property which contains a string identifying the creator of the quote. 
	For example: "Mark Twain" or "Traditional Irish proverb.”
	An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. 
	For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
	An optional year property which contains a number identifying the year of the quote. 
	For example, 1997. If there is no known year, then do not include this property on the object.
*/
/*
	Create a function named getRandomQuote which:
	selects a random quote object from the quotes array.
	returns the randomly selected quote object.	
*/
var msg = '';
function getRandomQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	var randomQuotes = quotes[randomNumber];
	return randomQuotes;
}
/*
	Create a function named printQuote which follows these rules:
	printQuote calls the getRandomQuote function and stores the returned quote object in a variable.
	printQuote constructs a string containing the different properties of the quote object using the following HTML template:
	<p class="quote"> [quote here] </p>
	<p class="source"> [source here]
  		<span class="citation"> [citation here] </span>
  		<span class="year"> [year here] </span>
	</p>

	printQuote only adds a <span class="citation"> if the quote object has a citation property.
	printQuote only adds a <span class="year"> if the quote object has a year property.
	printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that:
*/
function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
function printQuote() {
	var randomQuote = getRandomQuote();
	msg ='<p class="quote">' + randomQuote.quote + '</p>';
	msg += '<p class="source">' + randomQuote.source;
	if ( randomQuote.citation ) {
		msg += '<span class="citation">' + randomQuote.citation + '</span>';
	} else {
		msg += '';
	}
	if (randomQuote.year) {
		msg += '<span class="year">' + randomQuote.year + '</span></p>';	
	} else {
		msg += '';
	}
	print(msg);
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.body.style.backgroundColor = randomColor;
	document.getElementById('loadQuote').style.backgroundColor = randomColor;
}

