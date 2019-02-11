// Array of objects containing quotes and relevant information
var quotes = [
    {
      quote: 'Controlling complexity is the essence of computer programming.',
      source: 'Brian Kernigan',
      year: '1976',
      citation: 'Software Tools, p. 319',
      category: 'Complexity'
    },
    {
      quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
      source: 'Anonymous',
      category: 'Programming'
    },
    {
      quote: 'If debugging is the process of removing bugs, then programming must be the process of putting them in.',
      source: 'Edsger W. Dijkstra',
      category: 'Debugging'
    },
    {
      quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
      source: 'John F. Woods',
      year: '1991',
      citation: 'Google Groups',
      category: 'Quality'
    },
    {
      quote: 'The function of good software is to make the complex appear to be simple.',
      source: 'Grady Booch',
      year: '2010',
      citation: 'Frank H. P. Fitzek et al. Qt for Symbian. p. xv',
      category: 'Complexity'
    },
    {
      quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
      source: 'Bill Gates',
      category: 'Programming'
    },
    {
      quote: 'A different error message! Finally some progress!',
      source: 'bakablah (username)',
      year: '2016',
      citation: 'Devrant.com',
      category: 'Debugging'
    }
];

/*
* Generates a random RGB color and sets it as the
* background color of the page
*/
function randomBackgroundColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var finalColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = finalColor;
}

/*
* Generates a random number and uses that to randomly select
* (and return) a quote object from the 'quotes' array
*/
function getRandomQuote(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

/*
* Calls getRandomQuote function to select a quote and prints
* it to the page including all of its related information.
* Also calls randomBackgroundColor function to randomly change
* the background color of the entire page.
*/
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var stringOfQuoteProperties = '';
  stringOfQuoteProperties += '<p class="quote">' + randomQuote.quote + '</p>';
  stringOfQuoteProperties += '<p class="source">' + randomQuote.source;
  if(randomQuote.citation && randomQuote.citation !== '') {
    stringOfQuoteProperties += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if(randomQuote.year && randomQuote.year !== '') {
    stringOfQuoteProperties += '<span class="year">' + randomQuote.year + '</span>';
  }
  stringOfQuoteProperties += '</p>';
  stringOfQuoteProperties += '<p class="category"><span>' + randomQuote.category + '</span></p>';
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
  randomBackgroundColor();
}

// Changes quotes automatically after a certain amount of time passes.
setInterval(printQuote, 10000);

/*
* DO NOT CHANGE
* Assigns the printQuote function to the 'Show another quote' button.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
